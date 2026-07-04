#!/usr/bin/env python3
"""
apply-kdoc - Phase C of Issue #11.

Reads the JSON manifest produced by tools/kdoc-extractor/kotlinc/ (PSI
extractor - see tools/kdoc-extractor/refresh-manifest.sh) and
injects TSDoc blocks into the generated .d.ts files at
$PKG_ROOT/types/...

Strategy:
  * For each FQN in the manifest whose parent class matches a .d.ts file,
    locate the member declaration line by name (and optional discriminator
    for overloads) and prepend a TSDoc block.
  * For each FQN that *is* a class .d.ts file, prepend a TSDoc block at
    the top of the file's `export class`/`export interface` declaration.
  * Idempotent: skip if a TSDoc with the same description first-line is
    already present immediately above the target.
  * KDoc-link syntax `[Foo]` is converted to TSDoc `{@link Foo}`.

The `Source: foo.kt:NN` footer is rendered as a clickable GitHub
permalink when `--lb-sha` is provided or auto-detected from
references/liquidbounce. URL prefix defaults to CCBlueX/LiquidBounce
but is configurable via `--lb-url`.

Run:
    apply-kdoc.py <pkg-root> <manifest.json> [--lb-sha SHA] [--lb-url URL]
"""
from __future__ import annotations

import argparse
import json
import re
import subprocess
import sys
from pathlib import Path


DEFAULT_LB_URL = "https://github.com/CCBlueX/LiquidBounce"


def detect_lb_sha(repo_root: Path) -> str | None:
    """Best-effort: read HEAD sha from references/liquidbounce.
    Returns None if not a git checkout or git is unavailable."""
    lb_dir = repo_root / "references" / "liquidbounce"
    if not (lb_dir / ".git").exists():
        return None
    try:
        out = subprocess.check_output(
            ["git", "-C", str(lb_dir), "rev-parse", "HEAD"],
            stderr=subprocess.DEVNULL,
        )
        return out.decode().strip() or None
    except (subprocess.CalledProcessError, FileNotFoundError):
        return None


def make_source_link(src: dict, lb_sha: str | None, lb_url: str) -> str:
    """Format the Source: footer. With a known sha, emit a {@link} permalink;
    otherwise fall back to plain `path:line` literal."""
    file_path = src.get("file", "")
    line = src.get("line", "?")
    label = f"{file_path}:{line}"
    if lb_sha and file_path:
        url = f"{lb_url}/blob/{lb_sha}/{file_path}#L{line}"
        return f"Source: {{@link {url} | {label}}}"
    return f"Source: `{label}`"


# Match either of:
#   * Source: `path:line`            (pre-permalink format)
#   * Source: {@link <old-url> | path:line}   (older permalink with a stale sha)
# Capture path + line so we can rewrite to the current sha.
RE_SOURCE_FOOTER = re.compile(
    r"(?P<indent>^[ \t]*\*[ \t]+)Source: "
    r"(?:`(?P<plain>[^`]+):(?P<plain_line>\d+|\?)`"
    r"|\{@link\s+\S+\s+\|\s+(?P<linked>[^}]+?):(?P<linked_line>\d+|\?)\})\s*$",
    re.MULTILINE,
)


def refresh_source_links(text: str, lb_sha: str, lb_url: str) -> tuple[str, int]:
    """Rewrite all existing `Source: ...` footers in `text` to use the
    given lb_sha permalink form. Returns (new-text, count-rewritten).
    Idempotent: footers already on `lb_sha` are left untouched."""
    if not lb_sha:
        return text, 0
    count = 0

    def repl(m: re.Match[str]) -> str:
        nonlocal count
        indent = m.group("indent")
        path = m.group("plain") or m.group("linked")
        line = m.group("plain_line") or m.group("linked_line")
        new_url = f"{lb_url}/blob/{lb_sha}/{path}#L{line}"
        # Skip if already on the current sha (idempotent).
        if f"/blob/{lb_sha}/" in m.group(0):
            return m.group(0)
        count += 1
        return f"{indent}Source: {{@link {new_url} | {path}:{line}}}"

    return RE_SOURCE_FOOTER.sub(repl, text), count


# Convert KDoc-style links `[Foo]` and `[foo.bar]` to TSDoc `{@link Foo}`.
# Skip if the bracket content has a `]` (only single-segment links).
RE_KDOC_LINK = re.compile(r"\[([\w.$]+)\]")

# Member declaration: `    methodName(...` or `    methodName:` or
# `    methodName?:` (static or instance, single-line head).
# Accepts optional visibility (public/protected/private - TS-style),
# abstract, static, readonly, get/set modifiers.
# Also matches ts-generator's `/*not mapped: */ methodName(` form, which is
# emitted for Kotlin extension properties/functions that can't be fully
# represented in TypeScript but are still part of the public API surface.
def member_decl_pattern(name: str) -> re.Pattern[str]:
    nx = re.escape(name)
    return re.compile(
        rf"^([ \t]*)(?:/\*not mapped: \*/\s+)?"
        rf"(?:(?:public|protected|private)\s+)?"
        rf"(?:abstract\s+)?"
        rf"(?:static\s+|readonly\s+)*"
        rf"(?:get\s+|set\s+)?"
        rf"{nx}(?:\s*\??\s*[:(<])",
        re.MULTILINE,
    )


# Class/interface declaration head: `export class Name extends ...`.
def class_decl_pattern(name: str) -> re.Pattern[str]:
    nx = re.escape(name)
    return re.compile(
        rf"^export\s+(?:abstract\s+|declare\s+)?(?:class|interface)\s+{nx}\b",
        re.MULTILINE,
    )


# Type-alias declaration head: `export type Name = ...` or `export type Name<T> = ...`.
# ts-generator emits typealiases as `export type` at file-top scope when it
# decides not to flatten them into a class. Phase C injects above this line.
def typealias_decl_pattern(name: str) -> re.Pattern[str]:
    nx = re.escape(name)
    return re.compile(
        rf"^export\s+type\s+{nx}\b",
        re.MULTILINE,
    )


def kdoc_links_to_tsdoc(text: str) -> str:
    return RE_KDOC_LINK.sub(r"{@link \1}", text)


def _esc(value):
    """Break `*/` sequences so KDoc content can never close the TSDoc block
    early and spill live garbage into the .d.ts (same guard as
    apply-deprecations)."""
    if isinstance(value, str):
        return value.replace("*/", "* /")
    if isinstance(value, list):
        return [_esc(v) for v in value]
    if isinstance(value, dict):
        return {k: _esc(v) for k, v in value.items()}
    return value


def render_tsdoc(entry: dict, indent: str, lb_sha: str | None = None,
                 lb_url: str = DEFAULT_LB_URL) -> str:
    """Render a single KDoc entry as a TSDoc block with the given indent."""
    doc = _esc(kdoc_links_to_tsdoc(entry.get("doc") or "").rstrip())
    params: dict[str, str] = _esc(entry.get("params") or {})
    returns = _esc(entry.get("returns"))
    deprecated = _esc(entry.get("deprecated"))
    since = _esc(entry.get("since"))
    sees: list[str] = _esc(entry.get("see") or [])
    sample = _esc(entry.get("sample"))
    authors: list[str] = _esc(entry.get("authors") or [])
    anticheat = _esc(entry.get("anticheat"))
    anticheat_version = _esc(entry.get("anticheatVersion"))
    tested_on = _esc(entry.get("testedOn"))
    notes: list[str] = entry.get("notes") or []
    src = entry.get("source") or {}

    lines = [f"{indent}/**"]
    if doc:
        for line in doc.split("\n"):
            if line.strip():
                lines.append(f"{indent} * {line}")
            else:
                lines.append(f"{indent} *")

    # LB-specific custom tags get rendered as a structured @remarks block.
    # We deliberately avoid emitting non-standard block tags like
    # `@anticheat` because TSDoc parsers (api-extractor, tsdoc-microsoft)
    # warn on unrecognised tags. @remarks is universally supported and
    # IDEs render its body as styled prose on hover.
    has_lb_meta = anticheat or anticheat_version or tested_on or notes
    if has_lb_meta:
        if doc:
            lines.append(f"{indent} *")
        lines.append(f"{indent} * @remarks")
        ac_parts = []
        if anticheat:
            ac_parts.append(kdoc_links_to_tsdoc(anticheat).strip())
        if anticheat_version:
            # Don't auto-prefix `v` - LB version strings are diverse
            # (`b3896`, `2.7.5`, `14.07.2025`) and a forced `v` looks wrong.
            ac_parts.append(f"({kdoc_links_to_tsdoc(anticheat_version).strip()})")
        if ac_parts:
            lines.append(f"{indent} * - **Anticheat:** {' '.join(ac_parts)}")
        if tested_on:
            lines.append(f"{indent} * - **Tested on:** {kdoc_links_to_tsdoc(tested_on).strip()}")
        for note in notes:
            note_clean = kdoc_links_to_tsdoc(note).replace("\n", " ").strip()
            if note_clean:
                lines.append(f"{indent} * - {note_clean}")

    if (params or returns or deprecated or since or sees or sample or authors) and (doc or has_lb_meta):
        lines.append(f"{indent} *")

    for pname, pdoc in params.items():
        pdoc_clean = kdoc_links_to_tsdoc(pdoc).replace("\n", " ").strip()
        # Param names may collide with TS reserved words; T-3 will rewrite
        # them at the param-list, but the @param tag refers to the original.
        lines.append(f"{indent} * @param {pname} {pdoc_clean}".rstrip())

    if returns:
        lines.append(f"{indent} * @returns {kdoc_links_to_tsdoc(returns).strip()}")
    if deprecated:
        lines.append(f"{indent} * @deprecated {kdoc_links_to_tsdoc(deprecated).strip()}")
    if since:
        lines.append(f"{indent} * @since {since.strip()}")
    for s in sees:
        lines.append(f"{indent} * @see {kdoc_links_to_tsdoc(s).strip()}")
    for author in authors:
        lines.append(f"{indent} * @author {author.strip()}")
    if sample:
        lines.append(f"{indent} * @example")
        lines.append(f"{indent} * {kdoc_links_to_tsdoc(sample).strip()}")

    if src.get("file"):
        lines.append(f"{indent} *")
        lines.append(f"{indent} * {make_source_link(src, lb_sha, lb_url)}")

    lines.append(f"{indent} */")
    return "\n".join(lines)


def has_existing_tsdoc(src: str, decl_match: re.Match[str], first_doc_line: str) -> bool:
    """Idempotency: skip if any /** ... */ block already sits immediately above
    the declaration (separated only by blank / annotation lines)."""
    decl_line_start = src.rfind("\n", 0, decl_match.start()) + 1
    window_start = max(0, decl_line_start - 4000)
    window = src[window_start:decl_line_start]
    # Walk upwards line by line; the moment we find `*/`, an existing doc
    # block is attached.
    for line in reversed(window.rstrip("\n").split("\n")):
        s = line.strip()
        if not s:
            continue
        if s.startswith("@") and not s.startswith("@param") and not s.startswith("@return"):
            # decorator/annotation, keep scanning upward
            continue
        if s.endswith("*/"):
            return True
        return False
    return False


def strip_existing_tsdoc(src: str, decl_match: re.Match[str]) -> str:
    """If a /** ... */ block sits immediately above the declaration,
    delete it (along with any blank lines between the block and decl).
    Returns the modified source. Used for --force-overwrite."""
    decl_line_start = src.rfind("\n", 0, decl_match.start()) + 1
    head = src[:decl_line_start]
    tail = src[decl_line_start:]
    # Walk upward to find the bounds of an attached TSDoc.
    lines = head.split("\n")
    # `lines[-1]` is the empty trailing element because head ends with \n.
    # Search backward for `*/` ignoring trailing blanks/annotations.
    end_idx = None  # index in `lines` of the closing `*/`
    i = len(lines) - 2
    while i >= 0:
        s = lines[i].strip()
        if s == "":
            i -= 1; continue
        if s.startswith("@") and not s.startswith("@param") and not s.startswith("@return"):
            i -= 1; continue
        if s.endswith("*/"):
            end_idx = i
            break
        return src
    if end_idx is None:
        return src
    # Walk further back to find opening `/**`.
    j = end_idx
    while j >= 0 and not lines[j].lstrip().startswith("/**"):
        j -= 1
    if j < 0:
        return src
    # Drop lines[j:end_idx+1] from head.
    new_lines = lines[:j] + lines[end_idx + 1:]
    new_head = "\n".join(new_lines)
    return new_head + tail


def first_doc_line(entry: dict) -> str:
    doc = entry.get("doc") or ""
    for line in doc.split("\n"):
        line = line.strip()
        if line:
            return line
    return ""


def inject_member(
    src: str, member_name: str, entry: dict, fqn: str,
    lb_sha: str | None = None, lb_url: str = DEFAULT_LB_URL,
    force: bool = False,
) -> tuple[str, bool, str]:
    """Inject TSDoc above the first matching member declaration. Returns
    (new-src, did-inject, status-tag). If `force`, replace any existing
    TSDoc block instead of skipping."""
    pat = member_decl_pattern(member_name)
    m = pat.search(src)
    if not m:
        return src, False, "no-match"
    if has_existing_tsdoc(src, m, first_doc_line(entry)):
        if not force:
            return src, False, "already-present"
        src = strip_existing_tsdoc(src, m)
        # Pattern position may have moved - re-search.
        m = pat.search(src)
        if not m:
            return src, False, "no-match"
    indent = m.group(1)
    tsdoc = render_tsdoc(entry, indent, lb_sha, lb_url)
    decl_line_start = src.rfind("\n", 0, m.start()) + 1
    new_src = src[:decl_line_start] + tsdoc + "\n" + src[decl_line_start:]
    return new_src, True, "injected"


def inject_class(src: str, class_name: str, entry: dict,
                 lb_sha: str | None = None,
                 lb_url: str = DEFAULT_LB_URL,
                 force: bool = False) -> tuple[str, bool, str]:
    pat = class_decl_pattern(class_name)
    m = pat.search(src)
    if not m:
        return src, False, "no-match"
    if has_existing_tsdoc(src, m, first_doc_line(entry)):
        if not force:
            return src, False, "already-present"
        src = strip_existing_tsdoc(src, m)
        m = pat.search(src)
        if not m:
            return src, False, "no-match"
    tsdoc = render_tsdoc(entry, "", lb_sha, lb_url)
    decl_line_start = src.rfind("\n", 0, m.start()) + 1
    new_src = src[:decl_line_start] + tsdoc + "\n" + src[decl_line_start:]
    return new_src, True, "injected"


def inject_typealias(src: str, name: str, entry: dict,
                     lb_sha: str | None = None,
                     lb_url: str = DEFAULT_LB_URL,
                     force: bool = False) -> tuple[str, bool, str]:
    """Inject TSDoc above an `export type Name = ...` line. Mirrors
    inject_class but uses the typealias pattern. Indent is always empty
    because ts-generator emits typealiases at file-top scope."""
    pat = typealias_decl_pattern(name)
    m = pat.search(src)
    if not m:
        return src, False, "no-match"
    if has_existing_tsdoc(src, m, first_doc_line(entry)):
        if not force:
            return src, False, "already-present"
        src = strip_existing_tsdoc(src, m)
        m = pat.search(src)
        if not m:
            return src, False, "no-match"
    tsdoc = render_tsdoc(entry, "", lb_sha, lb_url)
    decl_line_start = src.rfind("\n", 0, m.start()) + 1
    new_src = src[:decl_line_start] + tsdoc + "\n" + src[decl_line_start:]
    return new_src, True, "injected"


# Match `// private foo(` or `// private foo:` etc.
# ts-generator emits these for Kotlin's `private` members - they are
# present in source as comments only, so we can't inject TSDoc and
# nobody would benefit (private members aren't part of the script API).
# Also matches the combined form `// private /*not mapped: */ foo(` that
# appears when a Kotlin private property has an extension-function form.
def is_private_comment_only(src: str, member_name: str) -> bool:
    nx = re.escape(member_name)
    return bool(re.search(
        rf"//\s*(?:private|internal)\s+(?:/\*not mapped: \*/\s+)?{nx}\b",
        src,
    ))


MANIFEST_KINDS = {"class", "interface", "enum", "object", "function", "property", "constructor", "typealias"}

# Current manifest schema version. Bumped any time the JSON shape
# changes. Mirrors the constant in
# tools/kdoc-extractor/kotlinc/src/main/kotlin/KdocExtract.kt and is
# asserted by tools/check.sh.
MANIFEST_SCHEMA_VERSION = 2


def _bean_getter_forms(member: str, kind: str | None) -> list[str]:
    """Return JVM-bean candidate names for a Kotlin val/var emitted as a
    method by ts-generator. `val foo` becomes `getFoo()`; `val isFoo`
    keeps its `is` prefix; `var foo` adds `setFoo(v)`."""
    if not member:
        return []
    if kind != "property":
        return []
    cap = member[0].upper() + member[1:]
    # `isXxx` properties keep their `is` prefix (JVM bean convention).
    if member.startswith("is") and len(member) > 2 and member[2].isupper():
        return [member]
    # Properties always have a getter; var adds a setter (we can't know
    # var vs val from manifest, so include both - they're harmless if
    # absent because inject_member returns no-match individually).
    return [f"get{cap}", f"set{cap}"]


def candidate_member_lookups(
    parent_fqn: str,
    member: str,
    kind: str | None,
    entry: dict,
    dts_index: dict[str, "Path"],
    direct_path: "Path",
) -> list[tuple["Path", str, str]]:
    """Build an ordered list of (file, member-name, lookup-tag) tuples to
    try for one manifest entry. First entry is the direct hit; later
    entries cover JVM-bean getter forms, Kt file-class extension siblings,
    companion-object files, and constructor aliases. Caller falls through
    the list until one injects."""
    out: list[tuple["Path", str, str]] = [(direct_path, member, "direct-direct")]
    for alt in _bean_getter_forms(member, kind):
        out.append((direct_path, alt, "direct-getter"))
    # When direct lookup landed on a real class but the member is an
    # extension function, the actual declaration lives in a *Kt sibling
    # named after the source file. Try that as a fallback even when
    # resolve_member_parent succeeded via "direct".
    src_file = entry.get("source", {}).get("file", "")
    if src_file:
        basename = Path(src_file).stem
        pkg = parent_fqn.rsplit(".", 1)[0]
        kt_fqn = f"{pkg}.{basename}Kt"
        kt_path = dts_index.get(kt_fqn)
        if kt_path is not None and kt_path != direct_path:
            out.append((kt_path, member, "kt-recv-fallback"))
            for alt in _bean_getter_forms(member, kind):
                out.append((kt_path, alt, "kt-recv-getter"))
    # Companion-object fallback: Kotlin companion-object members are emitted
    # as a separate `Parent$Companion.d.ts` class. If the FQN has no
    # `.Companion.` segment (extractor reports them as `Parent.member`),
    # try the companion file before giving up. This fixes TSDoc injection for
    # all companion vals/funs that aren't duplicated onto the owning class.
    companion_fqn = parent_fqn + ".Companion"
    companion_path = dts_index.get(companion_fqn)
    if companion_path is not None and companion_path != direct_path:
        out.append((companion_path, member, "companion"))
        for alt in _bean_getter_forms(member, kind):
            out.append((companion_path, alt, "companion-getter"))
    # Constructor alias: the PSI extractor stores constructor KDoc under an
    # FQN whose last segment is the class name (e.g. `InputBind.InputBind`).
    # The .d.ts spells these as `constructor(...)`, so try "constructor" as an
    # alternative member name when kind == "constructor".
    if kind == "constructor":
        out.append((direct_path, "constructor", "constructor-alias"))
        if companion_path is not None and companion_path != direct_path:
            out.append((companion_path, "constructor", "companion-constructor-alias"))
    return out


def validate_manifest(manifest: object) -> list[str]:
    """Lightweight schema check - surfaces accidental drift in the
    extractor's output without requiring jsonschema as a dependency.
    Returns a list of human-readable error strings (empty on success)."""
    errs: list[str] = []
    if not isinstance(manifest, dict):
        return [f"manifest root must be an object, got {type(manifest).__name__}"]

    def check_entry(fqn: str, e: object) -> None:
        if not isinstance(e, dict):
            errs.append(f"{fqn}: entry must be object, got {type(e).__name__}")
            return
        kind = e.get("kind")
        if kind is not None and kind not in MANIFEST_KINDS:
            errs.append(f"{fqn}: unknown kind {kind!r} (known: {sorted(MANIFEST_KINDS)})")
        doc = e.get("doc")
        if doc is not None and not isinstance(doc, str):
            errs.append(f"{fqn}: doc must be string")
        src = e.get("source")
        if src is not None:
            if not isinstance(src, dict):
                errs.append(f"{fqn}: source must be object")
            else:
                if "file" in src and not isinstance(src["file"], str):
                    errs.append(f"{fqn}: source.file must be string")
                if "line" in src and not isinstance(src["line"], int):
                    errs.append(f"{fqn}: source.line must be int")
        params = e.get("params")
        if params is not None and not isinstance(params, dict):
            errs.append(f"{fqn}: params must be object")
        returns = e.get("returns")
        if returns is not None and not isinstance(returns, str):
            errs.append(f"{fqn}: returns must be string")
        sees = e.get("see")
        if sees is not None and not (
            isinstance(sees, list) and all(isinstance(s, str) for s in sees)
        ):
            errs.append(f"{fqn}: see must be list of strings")
        since = e.get("since")
        if since is not None and not isinstance(since, str):
            errs.append(f"{fqn}: since must be string")
        for str_field in ("anticheat", "anticheatVersion", "testedOn"):
            v = e.get(str_field)
            if v is not None and not isinstance(v, str):
                errs.append(f"{fqn}: {str_field} must be string")
        for list_field in ("authors", "notes"):
            v = e.get(list_field)
            if v is not None and not (
                isinstance(v, list) and all(isinstance(s, str) for s in v)
            ):
                errs.append(f"{fqn}: {list_field} must be list of strings")

    for fqn, entry_or_list in manifest.items():
        if isinstance(entry_or_list, list):
            for e in entry_or_list:
                check_entry(fqn, e)
        else:
            check_entry(fqn, entry_or_list)
    return errs


def main(argv: list[str]) -> int:
    ap = argparse.ArgumentParser(prog="apply-kdoc",
                                 description="T-Doc Phase C - inject KDoc TSDoc blocks into .d.ts")
    ap.add_argument("pkg_root", type=Path, help="path to package (must contain types/)")
    ap.add_argument("manifest", type=Path, help="path to kdoc manifest.json")
    ap.add_argument("--lb-sha", default=None,
                    help="LiquidBounce commit sha for Source: permalinks "
                         "(auto-detected from references/liquidbounce if a git checkout)")
    ap.add_argument("--lb-url", default=DEFAULT_LB_URL,
                    help=f"GitHub repo URL prefix (default: {DEFAULT_LB_URL})")
    ap.add_argument("--no-validate", action="store_true",
                    help="skip manifest schema validation")
    ap.add_argument("--force-overwrite", action="store_true",
                    help="strip and replace existing TSDoc blocks. WARNING: "
                         "destroys Phase A hand-curated tooltips. Safe only "
                         "on a fresh regen-output tree where post-patches.sh "
                         "will re-apply Phase A. Do NOT run on committed "
                         "typings unless you know exactly "
                         "what you are doing.")
    ap.add_argument("--report", type=Path, default=None,
                    help="write a TSV diagnostic report listing dropped/orphan "
                         "entries by category to this path (no effect on "
                         "injection logic)")
    args = ap.parse_args(argv)

    pkg_root = args.pkg_root.resolve()
    manifest_path = args.manifest.resolve()

    types_root = pkg_root / "types"
    if not types_root.is_dir():
        print(f"apply-kdoc: skip - {types_root} not a directory", file=sys.stderr)
        return 0

    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))

    # Schema v2 (T-Doc #12): manifest is now wrapped in an envelope
    # `{schemaVersion: 2, entries: {...}}`. Older flat manifests (just
    # `{fqn: entry}` at top level) are still accepted for transition.
    if isinstance(manifest, dict) and "schemaVersion" in manifest and "entries" in manifest:
        sv = manifest.get("schemaVersion")
        if sv != MANIFEST_SCHEMA_VERSION:
            print(f"apply-kdoc: manifest schemaVersion={sv!r}, "
                  f"expected {MANIFEST_SCHEMA_VERSION}", file=sys.stderr)
            return 3
        manifest = manifest["entries"]
        if not isinstance(manifest, dict):
            print("apply-kdoc: manifest.entries must be an object", file=sys.stderr)
            return 3

    if not args.no_validate:
        errs = validate_manifest(manifest)
        if errs:
            print(f"apply-kdoc: manifest schema errors ({len(errs)}):", file=sys.stderr)
            for e in errs[:20]:
                print(f"  - {e}", file=sys.stderr)
            if len(errs) > 20:
                print(f"  ... {len(errs) - 20} more", file=sys.stderr)
            return 3

    # Resolve LB sha: explicit > auto-detect from references/liquidbounce.
    lb_sha = args.lb_sha
    if lb_sha is None:
        repo_root = Path(__file__).resolve().parent.parent.parent
        lb_sha = detect_lb_sha(repo_root)
    if lb_sha:
        print(f"apply-kdoc: Source: permalinks pinned to {lb_sha[:12]}", file=sys.stderr)
    if args.force_overwrite:
        print("apply-kdoc: WARNING - --force-overwrite is on, existing "
              "TSDoc blocks above manifest-known FQNs will be replaced. "
              "Phase A curated docs will need to be re-applied via "
              "post-patches.sh.", file=sys.stderr)

    # Build path index by class FQN.
    dts_index: dict[str, Path] = {}
    for p in types_root.rglob("*.d.ts"):
        rel = p.relative_to(types_root).as_posix()
        if rel.endswith(".d.ts"):
            rel = rel[: -len(".d.ts")]
        fqn = rel.replace("/", ".").replace("$", ".")
        dts_index[fqn] = p

    stats = {
        "class": 0, "member": 0, "typealias": 0,
        "skipped-present": 0, "skipped-private": 0,
        "no-match": 0, "orphan": 0,
        "overwritten": 0,
    }
    file_cache: dict[Path, str] = {}
    # Diagnostic categories - recorded only if --report is given.
    report_rows: list[tuple[str, str, str]] = []  # (fqn, category, detail)

    def get(path: Path) -> str:
        if path not in file_cache:
            file_cache[path] = path.read_text(encoding="utf-8")
        return file_cache[path]

    def resolve_member_parent(parent_fqn: str, entry: dict) -> tuple[Path | None, str]:
        """Resolve `parent_fqn` (the FQN of the class/object containing the
        member) to a .d.ts path. Tries:
          1. parent_fqn as-is in dts_index
          2. *Kt sibling at parent_fqn.<SourceFile>Kt - covers true
             package-level top-level functions/properties whose `parent`
             was emitted by the extractor as the package itself.
          3. *Kt sibling at <pkg>.<SourceFile>Kt - covers extension
             functions whose extractor `parent` is the receiver type
             (e.g. `Response.parse` where Response is in another package).
        Returns (path, lookup-method) - path is None if none hit."""
        if parent_fqn in dts_index:
            return dts_index[parent_fqn], "direct"
        src_file = entry.get("source", {}).get("file", "")
        if src_file:
            basename = Path(src_file).stem
            candidate_pkg = f"{parent_fqn}.{basename}Kt"
            if candidate_pkg in dts_index:
                return dts_index[candidate_pkg], "fileclass-kt"
            pkg = parent_fqn.rsplit(".", 1)[0]
            candidate_recv = f"{pkg}.{basename}Kt"
            if candidate_recv in dts_index:
                return dts_index[candidate_recv], "fileclass-kt-recv"
        return None, "not-found"

    # Process classes first so member injection doesn't bump line numbers
    # before a class-level header is added.
    for fqn, entry_or_list in manifest.items():
        entries = entry_or_list if isinstance(entry_or_list, list) else [entry_or_list]
        for entry in entries:
            kind = entry.get("kind")

            # Typealias path: ts-generator emits `export type Name = ...`
            # at file-top scope. The on-disk file is named after the
            # alias (last segment of FQN), so dts_index lookup works.
            if kind == "typealias" and fqn in dts_index:
                path = dts_index[fqn]
                name = path.name[: -len(".d.ts")]
                src = get(path)
                before = src
                src, ok, status = inject_typealias(
                    src, name, entry, lb_sha, args.lb_url, args.force_overwrite,
                )
                if ok:
                    file_cache[path] = src
                    stats["typealias"] += 1
                    if args.force_overwrite and before != src and "/**" in before[: before.find(name)]:
                        stats["overwritten"] += 1
                elif status == "already-present":
                    stats["skipped-present"] += 1
                elif status == "no-match":
                    stats["no-match"] += 1
                    if args.report:
                        report_rows.append((fqn, "typealias-no-match",
                                            f"file={path.relative_to(types_root)}"))
                continue

            if fqn in dts_index:
                path = dts_index[fqn]
                # Use the .d.ts file basename as the class name - for
                # nested classes the on-disk name preserves `$`
                # (e.g. `Outer$Inner.d.ts` declares `class Outer$Inner`),
                # whereas FQN's last segment is just `Inner`.
                name = path.name[: -len(".d.ts")]
                src = get(path)
                before = src
                src, ok, status = inject_class(
                    src, name, entry, lb_sha, args.lb_url, args.force_overwrite,
                )
                if ok:
                    file_cache[path] = src
                    stats["class"] += 1
                    if args.force_overwrite and before != src and "/**" in before[: before.find(name)]:
                        stats["overwritten"] += 1
                elif status == "already-present":
                    stats["skipped-present"] += 1
                elif status == "no-match":
                    stats["no-match"] += 1
                    if args.report:
                        report_rows.append((fqn, "class-no-match",
                                            f"file={path.relative_to(types_root)}"))
                continue

            # Member of class - parent FQN must be in dts_index (with
            # Kt-fallback for top-level functions).
            parts = fqn.rsplit(".", 1)
            if len(parts) != 2:
                stats["orphan"] += 1
                if args.report:
                    report_rows.append((fqn, "orphan-no-dot", ""))
                continue
            parent_fqn, member = parts

            # Try every candidate parent file + member name combination
            # before giving up. Covers three cases:
            #   1. Direct hit (most common).
            #   2. Extension fn whose parent FQN happens to also be a
            #      real class - direct lookup returns the wrong file; we
            #      need to also try the Kt-recv sibling.
            #   3. Kotlin property emitted as a JVM bean getter
            #      (`val foo` -> `getFoo()`, `val isFoo` -> `isFoo()`,
            #      `var foo` -> both `getFoo()` and `setFoo(v)`).
            kind = entry.get("kind")
            path, lookup = resolve_member_parent(parent_fqn, entry)
            if path is None:
                stats["orphan"] += 1
                if args.report:
                    src_file = entry.get("source", {}).get("file", "")
                    report_rows.append((fqn, "orphan-no-parent",
                                        f"parent={parent_fqn} src={src_file}"))
                continue
            candidates = candidate_member_lookups(parent_fqn, member, kind, entry, dts_index, path)
            injected = False
            for cand_path, cand_member, cand_lookup in candidates:
                src = get(cand_path)
                src, ok, status = inject_member(
                    src, cand_member, entry, fqn, lb_sha, args.lb_url, args.force_overwrite,
                )
                if ok:
                    file_cache[cand_path] = src
                    stats["member"] += 1
                    if cand_lookup != "direct-direct" and args.report:
                        report_rows.append((fqn, f"member-via-{cand_lookup}",
                                            f"parent={cand_path.stem} member={cand_member}"))
                    injected = True
                    break
                if status == "already-present":
                    stats["skipped-present"] += 1
                    injected = True
                    break
            if injected:
                continue
            # None of the candidates landed.
            # Reclassify a known sub-bucket: members ts-generator emitted
            # only as `// private foo(...)` comments. Check across ALL
            # candidate (path, member-name) pairs - this covers companion
            # files whose `// private member:` comments would otherwise
            # be invisible to the original single-path check.
            if any(is_private_comment_only(get(cp), cm) for cp, cm, _ in candidates):
                stats["skipped-private"] += 1
            else:
                stats["no-match"] += 1
                if args.report:
                    report_rows.append((fqn, "member-no-match",
                                        f"file={path.relative_to(types_root)}"))

    for path, content in file_cache.items():
        # Only write if changed.
        original = path.read_text(encoding="utf-8")
        if content != original:
            path.write_text(content, encoding="utf-8")

    # Second pass: rewrite all `Source:` footers (across every .d.ts in
    # types/, even untouched ones) so the permalinks pin to the current
    # LB sha. Cheap and idempotent.
    rewritten_files = 0
    rewritten_lines = 0
    if lb_sha:
        for p in types_root.rglob("*.d.ts"):
            text = p.read_text(encoding="utf-8")
            new_text, n = refresh_source_links(text, lb_sha, args.lb_url)
            if n:
                p.write_text(new_text, encoding="utf-8")
                rewritten_files += 1
                rewritten_lines += n

    if args.report:
        report_lines = ["fqn\tcategory\tdetail"]
        for fqn, cat, detail in report_rows:
            report_lines.append(f"{fqn}\t{cat}\t{detail}")
        args.report.write_text("\n".join(report_lines) + "\n", encoding="utf-8")
        print(f"apply-kdoc: report written to {args.report} ({len(report_rows)} rows)",
              file=sys.stderr)

    print(
        f"apply-kdoc: class+{stats['class']} member+{stats['member']} "
        f"typealias+{stats['typealias']} "
        f"skipped-present={stats['skipped-present']} "
        f"skipped-private={stats['skipped-private']} "
        f"no-match={stats['no-match']} "
        f"orphan={stats['orphan']}"
        + (f" source-links-refreshed={rewritten_lines} in {rewritten_files} files"
           if rewritten_lines else "")
        + (f" force-overwrite=on" if args.force_overwrite else "")
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
