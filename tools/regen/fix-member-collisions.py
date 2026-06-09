#!/usr/bin/env python3
"""
F7 — resolve Java field/method name collisions in the generated .d.ts tree.

Java permits a field and a method to share a name (`boolean onGround` +
`boolean onGround()`); Mojang mappings, records, JOML math types, Map.Entry and
enums all do it. TypeScript forbids a class member from being both a property
and a method: when the generator emits both `onGround: boolean;` and
`onGround(): boolean;`, the property declaration wins and the *method* becomes
uncallable (`x.onGround()` → "not callable"). With `skipLibCheck` the duplicate
isn't even reported, so it silently breaks at use sites.

This pass detects, per class, instance members emitted as BOTH a field and a
method of the same name, and drops exactly one declaration so the survivor is
usable — choosing by a heuristic that never loses functionality:

  * mutable field + method whose EVERY overload is zero-arg  -> drop the method,
    keep the data field.  (Vec3.x, matrix .m00, T-1 callable bindings — the
    field is the canonical, ergonomic accessor and a callable field is still
    callable.)
  * otherwise (readonly field, OR the method has any parameterized overload)
    -> drop the field, keep the method.  (Entity.onGround(), record .value(),
    enum .name(), and any genuine functional method that merely shares a field
    name — parameterized overloads are always preserved.)

Either form is reachable at runtime regardless (GraalJS resolves field-read vs
method-invoke by usage); dropping one only decides which form is *typed*.

Idempotent: a second run finds no collisions and is a no-op.

Usage:
    fix-member-collisions.py <pkg-root> [--dry-run]
        <pkg-root> contains types/**/*.d.ts (e.g. the published `typings/` tree
        or tools/regen-output/@ccbluex/liquidbounce-script-api).
"""
import os
import re
import sys

# A member line is indented exactly 4 spaces (one class per file; E-01 layout).
# Generic parameter lists may nest (`<T extends Map<string, T>>`): `[^()]*`
# tolerates nested angle brackets (constraints never contain parens before the
# parameter list opens).
FIELD_RE  = re.compile(r"^    (readonly )?([A-Za-z_$][\w$]*)\??:\s")
METHOD_RE = re.compile(r"^    ([A-Za-z_$][\w$]*)\s*(?:<[^()]*>)?\(")
ZEROARG_RE = re.compile(r"^    [A-Za-z_$][\w$]*\s*(?:<[^()]*>)?\(\s*\)")
STATIC_RE = re.compile(r"^    static\b")
# `    /*not mapped: */ member...` — the generator prefixes some members with
# an INLINE comment; the member after it is live TS and must be treated as a
# real declaration (previously these lines were skipped wholesale, hiding
# overloads from the keep-field heuristic and leaving live collisions behind).
INLINE_COMMENT_RE = re.compile(r"^    /\*[^*]*?\*/\s*(\S.*)$")


def doc_start(lines, i):
    """If lines[i-1] closes a `/** … */` block attached to member line i,
    return the index of its opening `/**`, else i (nothing to drop)."""
    if i == 0:
        return i
    if not lines[i - 1].strip().endswith("*/"):
        return i
    j = i - 1
    while j >= 0:
        if lines[j].strip().startswith("/**"):
            return j
        if not (lines[j].strip().startswith("*") or lines[j].strip().endswith("*/")):
            break
        j -= 1
    return i  # not a clean attached block — leave it alone


def member_line(ln):
    """Normalize a member line for matching: an inline `/*...*/` prefix
    (generator's `/*not mapped: */`) is stripped — the member after it is
    live TS. Returns the line to match against, or None to skip."""
    s = ln.strip()
    if s.startswith("//") or s.startswith("*"):
        return None
    m = INLINE_COMMENT_RE.match(ln)
    if m:
        return "    " + m.group(1)
    if s.startswith("/*"):
        return None
    return ln


def process(path):
    lines = open(path, encoding="utf-8").read().split("\n")
    fields = {}   # name -> {"lines":[idx...], "readonly":bool}
    methods = {}  # name -> {"lines":[idx...], "all_zeroarg":bool}
    unparsed = set()  # member names seen with a `(` we could NOT parse
    for i, raw in enumerate(lines):
        ln = member_line(raw)
        if ln is None:
            continue
        if STATIC_RE.match(ln):           # statics share no namespace with instances
            continue
        m = METHOD_RE.match(ln)
        if m and m.group(1) not in ("constructor", "new"):
            rec = methods.setdefault(m.group(1), {"lines": [], "all_zeroarg": True})
            rec["lines"].append(i)
            if not ZEROARG_RE.match(ln):
                rec["all_zeroarg"] = False
            continue
        f = FIELD_RE.match(ln)
        if f:
            rec = fields.setdefault(f.group(2), {"lines": [], "readonly": False})
            rec["lines"].append(i)
            if f.group(1):
                rec["readonly"] = True
            continue
        # A member-looking line with a paren that neither regex understood
        # (e.g. an exotic generic clause): note the leading identifier so the
        # heuristic stays conservative for that name.
        u = re.match(r"^    ([A-Za-z_$][\w$]*)", ln)
        if u and "(" in ln:
            unparsed.add(u.group(1))

    collisions = sorted(set(fields) & set(methods))
    if not collisions:
        return None

    drop = set()
    insert_before = {}  # line idx -> doc lines to re-attach above it
    dropped_fields = dropped_methods = 0
    for name in collisions:
        fld, mth = fields[name], methods[name]
        # An unparseable sibling declaration we couldn't classify (or couldn't
        # drop) means dropping the method might leave a live overload behind —
        # keep the method side in that case (conservative).
        keep_field = (not fld["readonly"]) and mth["all_zeroarg"] \
            and name not in unparsed
        target, survivor = (mth, fld) if keep_field else (fld, mth)
        if keep_field:
            dropped_methods += 1
        else:
            dropped_fields += 1
        salvaged_doc = None
        for idx in target["lines"]:
            drop.add(idx)
            ds = doc_start(lines, idx)
            for k in range(ds, idx):
                drop.add(k)
            if ds != idx and salvaged_doc is None:
                salvaged_doc = lines[ds:idx]
        # The doc documents the member NAME; if the survivor has none,
        # re-attach the dropped declaration's doc to it (H2: previously the
        # doc — possibly just injected by apply-kdoc — was destroyed).
        if salvaged_doc:
            sv = min(survivor["lines"])
            if doc_start(lines, sv) == sv:
                insert_before[sv] = salvaged_doc

    out = []
    for i, ln in enumerate(lines):
        if i in insert_before:
            out.extend(insert_before[i])
        if i not in drop:
            out.append(ln)
    open(path, "w", encoding="utf-8").write("\n".join(out))
    return (collisions, dropped_fields, dropped_methods)


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    dry = "--dry-run" in sys.argv
    if not args:
        print("usage: fix-member-collisions.py <pkg-root> [--dry-run]", file=sys.stderr)
        return 2
    types_root = os.path.join(args[0], "types")
    if not os.path.isdir(types_root):
        print(f"FAIL: not found: {types_root}", file=sys.stderr)
        return 2

    files = methods_dropped = fields_dropped = 0
    for dp, _, fns in os.walk(types_root):
        for fn in fns:
            if not fn.endswith(".d.ts"):
                continue
            p = os.path.join(dp, fn)
            if dry:
                # report-only: re-detect without writing
                txt = open(p, encoding="utf-8").read().split("\n")
                fset, mset = set(), set()
                for raw in txt:
                    ln = member_line(raw)
                    if ln is None or STATIC_RE.match(ln):
                        continue
                    mm = METHOD_RE.match(ln)
                    if mm and mm.group(1) not in ("constructor", "new"):
                        mset.add(mm.group(1)); continue
                    ff = FIELD_RE.match(ln)
                    if ff:
                        fset.add(ff.group(2))
                if fset & mset:
                    files += 1
                continue
            res = process(p)
            if res:
                files += 1
                fields_dropped += res[1]
                methods_dropped += res[2]
    verb = "would change" if dry else "F7 changed"
    print(f"{verb} {files} files; dropped {fields_dropped} fields, "
          f"{methods_dropped} methods")
    return 0


if __name__ == "__main__":
    sys.exit(main())
