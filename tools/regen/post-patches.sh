#!/usr/bin/env bash
#
# Post-regen refinement patches applied to tools/regen-output/.
#
# Why: T-1 (in ts-defgen.js) auto-detects classes implementing
# java.util.function.Function and emits the export as `Type_['apply']` which
# IS callable but exposes the raw Java parameter shape (typically
# Map<String, Object> → `{ [key: string]: Object }`). For a small number of
# script-API entry points the parameter is a runtime contract with named
# keys; we narrow the parameter type here so users get autocomplete on
# those keys.
#
# This is intentionally a tiny, explicit, idempotent overlay — NOT a general
# patcher. Each refinement is scoped to one named binding.
#
# Idempotency: every transform is a no-op when its target line already
# matches the refined form. Re-running this script is safe.
#
# Usage:
#   tools/regen/post-patches.sh                # patch tools/regen-output/
#   tools/regen/post-patches.sh <pkg-root>     # patch arbitrary tree
#
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
PKG_ROOT="${1:-$REPO_ROOT/tools/regen-output/@ccbluex/liquidbounce-script-api}"

# Set to 1 if any source-enrichment step actually CRASHES (vs. legitimately
# applying nothing). Checked at the end so a crashed enrichment fails the regen
# loudly instead of silently shipping a tree with missing names/docs.
POSTPATCH_FAILED=0

if [[ ! -d "$PKG_ROOT" ]]; then
  echo "FAIL: package root not found: $PKG_ROOT" >&2
  exit 1
fi

AMBIENT="$PKG_ROOT/ambient/ambient.d.ts"
if [[ ! -f "$AMBIENT" ]]; then
  echo "FAIL: ambient.d.ts not found: $AMBIENT" >&2
  exit 1
fi

# P-01-prime: refine the `registerScript` parameter shape from the raw
# Map<String, Object> projection (auto-emitted by T-1) to the runtime
# contract { name; version; authors }. This change is two edits:
#   1. import PolyglotScript directly (the return type), drop the
#      PolyglotScript$RegisterScript import alias.
#   2. spell out the callable signature with the narrow parameter shape.
python3 - "$AMBIENT" <<'PY'
import io, re, sys
from pathlib import Path

path = Path(sys.argv[1])
src = path.read_text()
orig = src

# (1) Replace the RegisterScript import with the PolyglotScript import.
import_old = (
    'import { PolyglotScript$RegisterScript as PolyglotScript$RegisterScript_ } '
    'from "../types/net/ccbluex/liquidbounce/script/PolyglotScript$RegisterScript";'
)
import_new = (
    'import { PolyglotScript as PolyglotScript_ } '
    'from "../types/net/ccbluex/liquidbounce/script/PolyglotScript";'
)
already_have_polyglot_import = import_new in src

if import_old in src:
    if already_have_polyglot_import:
        # PolyglotScript already imported elsewhere — just drop the
        # RegisterScript line, preserving the surrounding newline.
        src = src.replace(import_old + "\n", "")
    else:
        src = src.replace(import_old, import_new)

# (2) Refine the registerScript export. Match both the T-1 indexed-access form
#     and the legacy raw form so this script can promote either to the
#     narrow shape.
export_new = (
    'export const registerScript: (scriptObject: { name: string; version: string; '
    'authors: string[] }) => PolyglotScript_;'
)
patterns = [
    # T-1 indexed-access form
    r'export const registerScript: PolyglotScript\$RegisterScript_\["apply"\];',
    # Legacy raw form (before T-1 landed)
    r'export const registerScript: PolyglotScript\$RegisterScript_;',
]
applied = export_new in src
if not applied:
    for pat in patterns:
        new, n = re.subn(pat, export_new.replace("\\", r"\\"), src)
        if n:
            src = new
            applied = True
            break

if src == orig:
    print(f"post-patches: no-op on {path.name} (already refined or pattern missing)")
else:
    path.write_text(src)
    print(f"post-patches: refined {path.name} (P-01-prime: registerScript param shape)")

# Sanity: the resulting ambient must contain the narrow form.
if export_new not in path.read_text():
    print(f"FAIL: post-patch did not produce the expected registerScript line in {path}", file=sys.stderr)
    sys.exit(2)
PY

# P-02-prime: refine PolyglotScript.registerModule().
#
# The Kotlin signature is `registerModule(Map<String, Any>, Consumer<ClientModule>)`
# but at runtime the callback receives a ScriptModule (a polyglot proxy that
# wraps ClientModule with script-friendly methods like `bind(...)`,
# `setting(...)`, etc.), see PolyglotScript.kt line ~219:
#
#     val module = ScriptModule(this, moduleObject)
#     callback.accept(module)
#
# There is no static signal for this — the type promotion must be expressed
# as an overlay. We also narrow the descriptor parameter to the runtime
# contract { name; category; …extras } so authors get autocomplete on the
# two required keys.
python3 - "$PKG_ROOT/types/net/ccbluex/liquidbounce/script/PolyglotScript.d.ts" <<'PY'
import re, sys
from pathlib import Path

path = Path(sys.argv[1])
if not path.exists():
    print(f"post-patches: skipping P-02 — {path} not found", file=sys.stderr)
    sys.exit(0)

src = path.read_text()
orig = src
script_module_import = (
    "import type { ScriptModule } from './bindings/features/ScriptModule.d.ts'"
)
register_module_new = (
    "    registerModule(moduleObject: { name: string; category: string; "
    "[key: string]: unknown }, callback: (mod: ScriptModule) => void): void;"
)

# (1) Ensure the ScriptModule import exists. Insert right after the
#     ClientModule import to keep the block visually grouped.
if script_module_import not in src:
    client_module_import = re.search(
        r"^import type \{ ClientModule \} from '[^']+';?$",
        src, re.MULTILINE,
    )
    if client_module_import:
        end = client_module_import.end()
        src = src[:end] + "\n" + script_module_import + src[end:]
    else:
        print(
            "post-patches: WARNING P-02 — no ClientModule import found in "
            "PolyglotScript.d.ts; ScriptModule import not added",
            file=sys.stderr,
        )

# (2) Rewrite the registerModule signature. Match the raw generator output
#     (Map<String, Object> param + ClientModule callback) and the already-
#     refined form (idempotent no-op).
already_refined = register_module_new in src
if not already_refined:
    # Tolerate small whitespace variation in the raw signature.
    raw_pat = re.compile(
        r"^[ \t]*registerModule\(\s*moduleObject:\s*\{\s*\[key:\s*string\]:\s*Object\s*\},"
        r"\s*callback:\s*\(\s*param0:\s*ClientModule\s*\)\s*=>\s*void\s*\):\s*void;",
        re.MULTILINE,
    )
    new, n = raw_pat.subn(register_module_new, src)
    if n:
        src = new
    else:
        # Fall back: any registerModule(...) one-liner.
        loose = re.compile(r"^[ \t]*registerModule\([^\n]*\):\s*void;", re.MULTILINE)
        new, n = loose.subn(register_module_new, src)
        if n:
            src = new

if src == orig:
    print(f"post-patches: P-02 no-op on {path.name} (already refined or pattern missing)")
else:
    path.write_text(src)
    print(f"post-patches: refined {path.name} (P-02-prime: registerModule signature)")

# Sanity.
if register_module_new not in path.read_text():
    print(
        f"FAIL: P-02 did not produce the expected registerModule signature in {path}",
        file=sys.stderr,
    )
    sys.exit(2)
PY

# P-02b: refine PolyglotScript.registerMode() / registerChoice().
#
# Same shape as registerModule: the Kotlin signature is
# `registerMode(ModeValueGroup<Mode>, Map<String, Any>, Consumer<Mode>)` but at
# runtime the callback receives a ScriptMode — PolyglotScript.kt does
# `ScriptMode(modeObject, modeValueGroup).apply { callback.accept(this) }` — so
# the handler should see a ScriptMode (the polyglot proxy with the script-mode
# helpers), not a bare Mode. registerChoice delegates to registerMode, so it
# yields a ScriptMode too. We also relax the descriptor's Object index to
# unknown. No static signal recovers this; it's an overlay.
python3 - "$PKG_ROOT/types/net/ccbluex/liquidbounce/script/PolyglotScript.d.ts" <<'PY'
import re, sys
from pathlib import Path

path = Path(sys.argv[1])
if not path.exists():
    print(f"post-patches: skipping P-02b — {path} not found", file=sys.stderr)
    sys.exit(0)

src = path.read_text()
orig = src
script_mode_import = (
    "import type { ScriptMode } from './bindings/features/ScriptMode.d.ts'"
)

# (1) Ensure the ScriptMode import exists (grouped after the ScriptModule one).
if script_mode_import not in src:
    anchor = re.search(
        r"^import type \{ ScriptModule \} from '[^']+';?$", src, re.MULTILINE,
    )
    if anchor:
        end = anchor.end()
        src = src[:end] + "\n" + script_mode_import + src[end:]

# (2) Rewrite both registerMode and registerChoice signatures. Match the raw
#     generator form (Mode callback, Object descriptor index); idempotent once
#     refined.
for fn in ("registerMode", "registerChoice"):
    refined = (
        f"    {fn}(modeValueGroup: ModeValueGroup<Mode>, "
        f"modeObject: {{ [key: string]: unknown }}, "
        f"callback: (mode: ScriptMode) => void): void;"
    )
    if refined in src:
        continue
    raw = re.compile(
        rf"^[ \t]*{fn}\(\s*modeValueGroup:\s*ModeValueGroup<Mode>\s*,"
        rf"\s*modeObject:\s*\{{\s*\[key:\s*string\]:\s*Object\s*\}}\s*,"
        rf"\s*callback:\s*\(\s*param0:\s*Mode\s*\)\s*=>\s*void\s*\):\s*void;",
        re.MULTILINE,
    )
    new, n = raw.subn(refined, src)
    if n:
        src = new
    else:
        loose = re.compile(rf"^[ \t]*{fn}\([^\n]*\):\s*void;", re.MULTILINE)
        new, n = loose.subn(refined, src)
        if n:
            src = new

if src == orig:
    print(f"post-patches: P-02b no-op on {path.name} (already refined or pattern missing)")
else:
    path.write_text(src)
    print(f"post-patches: refined {path.name} (P-02b: registerMode/registerChoice)")
PY

# T-3: rename TS reserved-word parameter names across all generated
# .d.ts files under types/. These appear because ntrrgc/ts-generator copies
# parameter names verbatim from the Java/Kotlin bytecode, where synthetic or
# anonymous params can be emitted as identifiers that happen to collide with
# TS reserved words (e.g. `null` for inner-class outer references, `in`/`var`
# /`function`/`yield`/`await` for fastutil/Guava methods). Each occurrence
# triggers TS1390/TS1359/TS1138 parse errors and pollutes `tsc` output even
# when the user's own code is clean.
#
# Strategy: ONLY transform identifiers that are unambiguously in parameter
# position — preceded by `(` or `, ` and followed by `?: ` or `: `. Append a
# single `_` to disambiguate from the keyword. Idempotent because the
# renamed form (e.g. `null_`) no longer matches the pattern.
python3 - "$PKG_ROOT/types" <<'PY'
import re, sys, time
from pathlib import Path

types_root = Path(sys.argv[1])
if not types_root.is_dir():
    print(f"post-patches: skipping T-3 — {types_root} not a directory", file=sys.stderr)
    sys.exit(0)

# Reserved words that cannot be used as identifiers in TS strict mode.
RESERVED = (
    "break|case|catch|class|const|continue|debugger|default|delete|do|else|"
    "enum|export|extends|false|finally|for|function|if|import|in|instanceof|"
    "new|null|return|super|switch|throw|true|try|typeof|var|void|while|"
    "with|implements|interface|let|package|private|protected|public|static|"
    "yield|await"
)
# Note: `this` is intentionally excluded — TypeScript supports a typed
# `this` parameter in function signatures (`(this: T, ...) => R`) which
# T-7 relies on, and no real Java/Kotlin parameter is ever named `this`
# at the bytecode level, so excluding it is also a no-op for raw output.

# Match identifier in parameter position. Three groups:
#   1: the leading char(s) we want to preserve verbatim (`(`, `,`, `<` or
#      whitespace after them).
#   2: the reserved word itself.
#   3: the trailing context (`?:` or `:` followed by whitespace).
#
# We rely on the param-list-like syntax that always brackets the identifier
# between an opening bracket / comma and a colon. This is precise enough to
# avoid hitting return type positions (which are preceded by `)` not `(`)
# and union/intersection types (which use `|` and `&`, never `:`).
PARAM_NAME = re.compile(
    r"([\(,]\s*(?:readonly\s+)?(?:\.{3})?)"
    rf"({RESERVED})"
    r"(\??:\s)"
)

total_files = 0
total_subs = 0
changed_files = 0
start = time.time()

# Skip identifier-rename inside /** ... */ block comments (TSDoc / JSDoc).
# These are user-facing prose where keyword-suffixing the wrong word would
# turn correct example code into nonsense (e.g. `default:` in @example).
COMMENT_BLOCK = re.compile(r"/\*\*(?:[^*]|\*(?!/))*\*/")

for path in types_root.rglob("*.d.ts"):
    total_files += 1
    text = path.read_text()
    # Split into [code, comment, code, comment, ...]; even indices are code.
    parts = COMMENT_BLOCK.split(text)
    comments = COMMENT_BLOCK.findall(text)
    file_subs = 0
    for i, segment in enumerate(parts):
        new_segment, n = PARAM_NAME.subn(r"\1\2_\3", segment)
        if n:
            parts[i] = new_segment
            file_subs += n
    if file_subs:
        # Re-interleave: parts[0] + comments[0] + parts[1] + comments[1] + …
        rebuilt = []
        for i, p in enumerate(parts):
            rebuilt.append(p)
            if i < len(comments):
                rebuilt.append(comments[i])
        path.write_text("".join(rebuilt))
        changed_files += 1
        total_subs += file_subs

elapsed = time.time() - start
print(
    f"post-patches: T-3 renamed reserved-word params — "
    f"{total_subs} substitutions across {changed_files}/{total_files} files "
    f"({elapsed:.1f}s)"
)
PY

# T-4: declare GraalVM JS intrinsics inside the ambient `declare global { }`
# block. These are exposed by the GraalVM Truffle host to every script as
# top-level bindings but are NOT enumerable via Object.entries(globalThis)
# (they live as non-enumerable host-provided properties on the global), so
# the ts-defgen.js auto-detect pass never sees them. We inject the type
# declarations here so authors get autocomplete on `Java.type(...)`,
# `Polyglot.import(...)`, `print(...)`, and friends.
#
# Marker comment `// T-4: GraalVM intrinsics begin` keeps the patch idempotent.
python3 - "$AMBIENT" <<'PY'
import re, sys
from pathlib import Path

path = Path(sys.argv[1])
src = path.read_text()
marker_begin = "    // T-4: GraalVM intrinsics begin"
marker_end = "    // T-4: GraalVM intrinsics end"
if marker_begin in src:
    print(f"post-patches: T-4 no-op on {path.name} (marker present)")
    sys.exit(0)

block = f'''{marker_begin}
    // Truffle/GraalVM host-provided globals — exposed to every polyglot
    // script but invisible to `Object.entries(globalThis)`. See:
    //   https://www.graalvm.org/jdk25/reference-manual/js/JavaInteroperability/
    //   https://www.graalvm.org/jdk25/reference-manual/polyglot-programming/
    interface JavaIntrinsic {{
        /** Resolve a Java class by FQN. Returns a "type" handle: callable as
         *  a constructor and indexable for static members. */
        type<T = any>(className: string): T;
        /** Convert a Java array (or Iterable) to a JS array. */
        from<T = unknown>(javaArray: any): T[];
        /** Convert a JS iterable to a Java array of the given element type. */
        to(jsArray: ArrayLike<unknown>, javaType?: string | any): any;
        /** Extend one or more Java classes / interfaces. */
        extend(...types: any[]): any;
        /** Call a superclass method on a Java-extended object. */
        super(obj: any): any;
        /** Run a callback while holding the intrinsic monitor of `lock`. */
        synchronized<T>(fn: () => T, lock: any): T;
        isJavaObject(obj: unknown): boolean;
        isJavaFunction(obj: unknown): boolean;
        isScriptObject(obj: unknown): boolean;
        isScriptFunction(obj: unknown): boolean;
        isType(obj: unknown): boolean;
        typeName(type: any): string;
        asJSONCompatible(obj: any): any;
    }}
    const Java: JavaIntrinsic;
    /** GraalVM polyglot bindings — shared key/value space across languages. */
    interface PolyglotIntrinsic {{
        import<T = unknown>(name: string): T;
        export<T>(name: string, value: T): void;
        eval<T = unknown>(language: string, source: string): T;
        evalFile<T = unknown>(language: string, source: string): T;
    }}
    const Polyglot: PolyglotIntrinsic;
    /** Print to stdout with a trailing newline. */
    function print(...args: unknown[]): void;
    /** Print to stderr with a trailing newline. */
    function printErr(...args: unknown[]): void;
    /** Evaluate JS source from a string, file path, or URL. */
    function load(source: string | {{ name: string; script: string }}): unknown;
    /** Like `load`, but evaluates in a fresh global scope. */
    function loadWithNewGlobal(source: string | {{ name: string; script: string }}, ...args: unknown[]): unknown;
    /** GraalVM runtime metadata. */
    const Graal: {{
        readonly language: string;
        readonly versionECMAScript: string;
        readonly versionGraalVM: string;
        readonly isGraalRuntime: boolean;
    }};
    /** Worker-thread API (only when js.worker is enabled). */
    const Workers: any;
{marker_end}
'''

# Insert the block right after the `declare global {` line. Match exactly to
# avoid touching anything unintended.
new_src, n = re.subn(
    r'(^declare global \{\n)',
    lambda m: m.group(1) + block,
    src, count=1, flags=re.MULTILINE,
)
if n == 0:
    print(
        f"post-patches: WARNING T-4 — `declare global {{` not found in {path.name}; "
        "GraalVM intrinsics not injected",
        file=sys.stderr,
    )
    sys.exit(0)

path.write_text(new_src)
print(f"post-patches: T-4 injected GraalVM intrinsics into {path.name}")
PY

# T-5: PolyglotScript.on() literal-string overloads. The Kotlin signature
# is `on(eventName: String, handler: Runnable)` (which the generator emits
# as `on(eventName: string, handler: () => void): void`). Only three
# event names are ever dispatched: "load", "enable", "disable" — see
# PolyglotScript.kt callGlobalEvent() callers. Adding string-literal
# overloads gives autocomplete on those names and rejects typos. The
# generic string fallback is preserved as the last overload so power-users
# who depend on dynamic event names aren't broken.
python3 - "$PKG_ROOT/types/net/ccbluex/liquidbounce/script/PolyglotScript.d.ts" <<'PY'
import re, sys
from pathlib import Path

path = Path(sys.argv[1])
if not path.exists():
    print(f"post-patches: skipping T-5 — {path} not found", file=sys.stderr)
    sys.exit(0)

src = path.read_text()
overload_block_marker = '    on(eventName: "load" | "enable" | "disable", handler: () => void): void;'
if overload_block_marker in src:
    print(f"post-patches: T-5 no-op on {path.name} (overload already present)")
    sys.exit(0)

old_line = re.compile(
    r'^[ \t]*on\(eventName: string, handler: \(\) => void\): void;[ \t]*$',
    re.MULTILINE,
)
replacement = (
    f'{overload_block_marker}\n'
    f'    /** @deprecated Only "load" | "enable" | "disable" are dispatched '
    f'by PolyglotScript — see `callGlobalEvent` in PolyglotScript.kt. Use the '
    f'literal-overload above for editor autocomplete. */\n'
    f'    on(eventName: string, handler: () => void): void;'
)
new_src, n = old_line.subn(replacement, src, count=1)
if n == 0:
    print(
        f"post-patches: WARNING T-5 — generic on() signature not found in {path.name}",
        file=sys.stderr,
    )
    sys.exit(0)
path.write_text(new_src)
print(f"post-patches: T-5 added on() literal overloads to {path.name}")
PY

# T-6: ScriptSetting factory option-object signatures. Each ScriptSetting
# method takes a single org.graalvm.polyglot.Value parameter and reads
# named members off it (name, default, range, suffix, choices, canBeNone).
# The runtime contract is enforced by Kotlin code (ScriptSetting.kt), not
# by the static type. Without these overlays, autocomplete shows nothing
# inside the option object and authors have to read source code to know
# what keys to pass. We replace each `value: Value` parameter with the
# named-key object shape required at runtime.
python3 - "$PKG_ROOT/types/net/ccbluex/liquidbounce/script/bindings/features/ScriptSetting.d.ts" <<'PY'
import re, sys
from pathlib import Path

path = Path(sys.argv[1])
if not path.exists():
    print(f"post-patches: skipping T-6 — {path} not found", file=sys.stderr)
    sys.exit(0)

src = path.read_text()
orig = src

# (method_name, raw signature suffix, replacement signature with refined
# parameter shape). Return types match the regenerated form exactly so the
# diff stays minimal and the rewrite is reversible.
SIGS = [
    (
        "boolean",
        "boolean(option: { name: string; default: boolean }): Value<boolean>;",
    ),
    (
        "float",
        "float(option: { name: string; default: number; range: [number, number]; "
        "suffix?: string }): RangedValue<number>;",
    ),
    (
        "floatRange",
        "floatRange(option: { name: string; default: [number, number]; "
        "range: [number, number]; suffix?: string }): "
        "RangedValue<ClosedFloatingPointRange<number>>;",
    ),
    (
        "int",
        "int(option: { name: string; default: number; range: [number, number]; "
        "suffix?: string }): RangedValue<number>;",
    ),
    (
        "intRange",
        "intRange(option: { name: string; default: [number, number]; "
        "range: [number, number]; suffix?: string }): "
        "RangedValue<{ start: number; endInclusive: number; step: number }>;",
    ),
    (
        "key",
        "key(option: { name: string; default: string }): Value<InputConstants$Key>;",
    ),
    (
        "text",
        "text(option: { name: string; default: string }): Value<string>;",
    ),
    (
        "textArray",
        "textArray(option: { name: string; default: string[] }): Value<string[]>;",
    ),
    (
        "choose",
        "choose<C extends readonly string[]>(option: { name: string; choices: C; "
        "default: C[number] }): ChoiceListValue<Tagged>;",
    ),
    (
        "multiChoose",
        "multiChoose<C extends readonly string[]>(option: { name: string; "
        "choices: C; default?: ReadonlyArray<C[number]>; canBeNone?: boolean }): "
        "MultiChoiceListValue<Tagged>;",
    ),
]

substitutions = 0
for method, refined in SIGS:
    indented = "    " + refined
    if indented in src:
        continue  # idempotent
    # Match: `    <method>(value: Value): <return>;` — generated form. The
    # param type may be aliased (`Value_2`) by the W12b import-collision fix
    # when the file imports two `Value` types, so tolerate a `_N` suffix.
    raw_pat = re.compile(
        rf"^[ \t]*{re.escape(method)}\(value: Value(?:_\d+)?\):[^\n]+;[ \t]*$",
        re.MULTILINE,
    )
    new, n = raw_pat.subn(indented, src, count=1)
    if n:
        src = new
        substitutions += 1

if src == orig:
    print(f"post-patches: T-6 no-op on {path.name} (already refined or pattern missing)")
else:
    path.write_text(src)
    print(
        f"post-patches: T-6 refined {substitutions}/{len(SIGS)} ScriptSetting "
        f"factories in {path.name}"
    )
PY

# -----------------------------------------------------------------------------
# T-7 — DSL receiver lambda: ValueGroup.curve
# -----------------------------------------------------------------------------
# Kotlin signature:
#   inline fun curve(name: String, block: CurveValue.Builder.() -> Unit): CurveValue
# Generated TS:
#   curve(name: string, block: Function1<CurveValue$Builder, void>): CurveValue;
# Function1 is an interface with an `invoke` method — TS callers can't pass an
# arrow function. The receiver (`this` inside block) is lost entirely.
#
# Refined to a TS function type with `this`-parameter binding so callers can
# write `group.curve("x", function () { this.tension = 0.5 })`.

VG_FILE="$PKG_ROOT/types/net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts"
if [ -f "$VG_FILE" ]; then
python3 - "$VG_FILE" <<'PY'
import sys, re
from pathlib import Path

path = Path(sys.argv[1])
src = path.read_text()

refined = "    curve(name: string, block: (this: CurveValue$Builder) => void): CurveValue;"

# Match the generator's curve(block) param in either form: the nominal
# `Function1<CurveValue$Builder, void>` or — since the W5a function-type-arrow
# change — the arrow `(param0: CurveValue$Builder) => void`. Rewrite the block
# to a receiver-typed lambda so `this` is `CurveValue$Builder` inside.
raw_pat = re.compile(
    r"^[ \t]*curve\(name: string, block: "
    r"(?:Function1<CurveValue\$Builder, void>"
    r"|\(param0: CurveValue\$Builder\) => void)\): CurveValue;[ \t]*$",
    re.MULTILINE,
)

if refined in src:
    print(f"post-patches: T-7 no-op on {path.name} (already refined)")
else:
    src, n = raw_pat.subn(refined, src, count=1)
    if n:
        path.write_text(src)
        print(f"post-patches: T-7 refined ValueGroup.curve in {path.name}")
    else:
        print(f"post-patches: T-7 skip — raw curve signature not found in {path.name}")
PY
fi

# -----------------------------------------------------------------------------
# T-Doc (Phase A POC) — inject TSDoc comments on a curated set of high-traffic
# script-facing methods so authors get docstring tooltips in VS Code without
# having to read Kotlin source. This is a manual seed; the eventual fix
# (Issue #11) is a kdoc-extractor → ts-generator pipeline that automates the
# whole surface. For now, hard-coding the highest-traffic ~5 endpoints proves
# the rendering pathway works and gives immediate UX lift.
#
# Source of each docstring is recorded in a `Source:` line so future
# automation can verify/replace them.

python3 - "$PKG_ROOT" <<'PY'
import sys, re
from pathlib import Path

root = Path(sys.argv[1])

# Each entry: (relative file path under root,
#              marker — the exact line we anchor before,
#              docstring text — already wrapped in /** ... */ with leading indent)
# Idempotency: skip if the docstring's first line is already present
# directly above the marker.

DOCS = [
    # PolyglotScript.registerScript on the ambient global (post-patches P-01-prime
    # rewrites this from the Java-bridge class form).
    (
        "ambient/ambient.d.ts",
        "    export const registerScript: (scriptObject: { name: string; version: string; authors: string[] }) => PolyglotScript_;",
        """    /**
     * Registers a new script with LiquidBounce. **Must be called exactly once**
     * at the top level of every script — the return value is your script
     * handle (used to register modules, listen for lifecycle events, etc.).
     *
     * @param scriptObject Identity metadata for this script.
     * @param scriptObject.name Display name. Shown in the script manager.
     * @param scriptObject.version Semver-ish version string.
     * @param scriptObject.authors One or more author names.
     * @returns The script handle for chaining further registrations.
     *
     * @example
     * ```ts
     * const script = registerScript({
     *     name: "MyScript",
     *     version: "1.0.0",
     *     authors: ["me"],
     * });
     *
     * script.on("load", () => print("loaded"));
     * ```
     *
     * Source: `PolyglotScript.kt` — `RegisterScript.apply`, KDoc.
     */""",
    ),
    # PolyglotScript.registerModule
    (
        "types/net/ccbluex/liquidbounce/script/PolyglotScript.d.ts",
        "    registerModule(moduleObject: { name: string; category: string; [key: string]: unknown }, callback: (mod: ScriptModule) => void): void;",
        """    /**
     * Registers a new module backed by this script. The callback receives a
     * fully-constructed {@link ScriptModule} which you configure (settings,
     * event handlers, render logic) before returning. The module is added
     * to LiquidBounce's module manager as soon as your script is enabled.
     *
     * @param moduleObject Metadata describing the module.
     * @param moduleObject.name Display name shown in the ClickGUI.
     * @param moduleObject.category One of `"Combat" | "Movement" | "Player" | "Render" | "World" | "Misc" | "Fun" | "Exploit"`.
     * @param callback Configurator invoked once at registration. Use it to
     *                 declare settings (`module.setting.boolean(...)`),
     *                 bind events (`module.on(...)`), and define behaviour.
     *
     * @example
     * ```ts
     * script.registerModule({ name: "MyModule", category: "Misc" }, (mod) => {
     *     const enabled = mod.setting.boolean({ name: "loud", default: false });
     *     mod.on("enable", () => print("on"));
     * });
     * ```
     *
     * Source: `PolyglotScript.kt:213` — KDoc on `fun registerModule`.
     */""",
    ),
    # PolyglotScript.on — literal-event overload (the narrow one only; the
    # @deprecated fallback already has a comment so we leave it alone).
    (
        "types/net/ccbluex/liquidbounce/script/PolyglotScript.d.ts",
        '    on(eventName: "load" | "enable" | "disable", handler: () => void): void;',
        """    /**
     * Binds a handler to one of this script's lifecycle events.
     *
     * @param eventName Lifecycle event to listen for:
     *   - `"load"` — fired once when LiquidBounce finishes loading this
     *               script source (before any module registration takes
     *               effect). Use it for one-time global setup.
     *   - `"enable"` — fired every time the user enables this script in
     *                 the script manager (after `load`, and after each
     *                 hot-reload).
     *   - `"disable"` — fired when the user disables / unloads this
     *                  script. Use it to release resources, unbind
     *                  external listeners, etc.
     * @param handler Zero-argument callback. None of the three lifecycle
     *                events carry a payload.
     *
     * @example
     * ```ts
     * script.on("enable", () => print("hello"));
     * script.on("disable", () => print("bye"));
     * ```
     *
     * Source: `PolyglotScript.kt:282` — KDoc on `fun on`; payload shape
     * confirmed by `callGlobalEvent` call sites.
     */""",
    ),
    # ValueGroup.curve (T-7 receiver-lambda form)
    (
        "types/net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts",
        "    curve(name: string, block: (this: CurveValue$Builder) => void): CurveValue;",
        """    /**
     * Declares a {@link CurveValue} setting using the Kotlin-DSL-style
     * builder. Inside the `block`, `this` is bound to {@link CurveValue$Builder}
     * so you can configure curve points fluently. **Use a `function` (not an
     * arrow), or the `this` binding will be lost.**
     *
     * @param name Display name of the setting.
     * @param block Builder configurator. `this` is the curve builder.
     * @returns The curve setting, which you can use to read interpolated
     *          values at runtime.
     *
     * @example
     * ```ts
     * const easing = group.curve("Speed Curve", function () {
     *     this.tension = 0.5;
     *     // configure points...
     * });
     * ```
     *
     * Source: `ValueGroup.kt:502` — inline DSL builder. (Method has no
     * KDoc in upstream; this docstring is authored locally.)
     */""",
    ),
    # ScriptSetting.boolean — pick one factory as POC; the others can be
    # auto-generated later by the kdoc-extractor pipeline.
    (
        "types/net/ccbluex/liquidbounce/script/bindings/features/ScriptSetting.d.ts",
        "    boolean(option: { name: string; default: boolean }): Value<boolean>;",
        """    /**
     * Creates a boolean setting (rendered as a toggle / checkbox in the
     * ClickGUI). The value can be read via `.get()` at runtime.
     *
     * @param option.name Display name shown in the ClickGUI.
     * @param option.default Initial value if the user hasn't changed it.
     * @returns The setting handle. Call `.get()` to read the current value.
     *
     * @example
     * ```ts
     * const loud = mod.setting.boolean({ name: "Loud", default: false });
     * if (loud.get()) print("loud!");
     * ```
     *
     * Source: `ScriptSetting.kt:43` — `fun boolean(value: PolyglotValue)`,
     * reads the `name` and `default` members. Class-level KDoc states
     * "Object used by the script API to provide an idiomatic way of
     * creating module values."
     */""",
    ),
]

injected = 0
skipped_present = 0
skipped_missing = 0

for rel, marker, doc in DOCS:
    path = root / rel
    if not path.exists():
        skipped_missing += 1
        continue
    src = path.read_text()
    # Build the block to insert (doc + newline + marker).
    block = doc + "\n" + marker
    if block in src:
        skipped_present += 1
        continue
    if marker not in src:
        skipped_missing += 1
        continue
    # Single replacement (file may legitimately contain the marker once).
    src = src.replace(marker, block, 1)
    path.write_text(src)
    injected += 1

print(
    f"post-patches: T-Doc injected {injected}/{len(DOCS)} TSDoc blocks "
    f"({skipped_present} already present, {skipped_missing} missing target)"
)
PY

# -----------------------------------------------------------------------------
# T-Doc Phase C — automated KDoc → TSDoc injection from
# tools/kdoc-extractor/manifest.json. Adds TSDoc blocks to all classes and
# members where KDoc exists in the LiquidBounce source. Skips any
# declaration that already has a /** … */ block (which preserves the
# hand-curated Phase A docs).
#
# The manifest is committed to git alongside the extractor so this step is
# fully offline / reproducible.

# Source-enrichment toggles (build-time knobs). These two steps - and only
# these two - derive from the LiquidBounce *source* (via the committed
# manifests). Everything else in the package comes from runtime reflection.
#   SKIP_SOURCE_ENRICHMENT=1  master: disables both KDoc docs and param names
#   SKIP_KDOC=1               disables KDoc -> TSDoc injection only
#   SKIP_PARAM_NAMES=1        disables paramargN -> real-name rename only
# (To fully disable KDoc you also want regen-types.sh to stop staging
# manifest.json for the in-generator KDocSource path; it honours the same
# vars.) The manifests stay committed - this only gates whether they're applied.
SKIP_KDOC_EFF=0
SKIP_PARAM_NAMES_EFF=0
[[ "${SKIP_KDOC:-0}" == "1" || "${SKIP_SOURCE_ENRICHMENT:-0}" == "1" ]] && SKIP_KDOC_EFF=1
[[ "${SKIP_PARAM_NAMES:-0}" == "1" || "${SKIP_SOURCE_ENRICHMENT:-0}" == "1" ]] && SKIP_PARAM_NAMES_EFF=1

MANIFEST="$REPO_ROOT/tools/kdoc-extractor/manifest.json"
APPLY_SCRIPT="$REPO_ROOT/tools/regen/apply-kdoc.py"
if [ "$SKIP_KDOC_EFF" == "1" ]; then
    echo "post-patches: T-Doc-Phase-C skipped (SKIP_KDOC/SKIP_SOURCE_ENRICHMENT)"
elif [ -f "$MANIFEST" ] && [ -f "$APPLY_SCRIPT" ]; then
    python3 "$APPLY_SCRIPT" "$PKG_ROOT" "$MANIFEST" || \
        { echo "post-patches: ERROR — apply-kdoc CRASHED (continuing; TSDoc missing)" >&2; POSTPATCH_FAILED=1; }
else
    echo "post-patches: T-Doc-Phase-C skipped (manifest or apply script missing)"
fi

# -----------------------------------------------------------------------------
# #12b — real parameter names. ts-generator emits JVM-erased placeholders
# (`paramarg0`, `paramarg1`, ...). apply-signatures.py rewrites them to the
# real source names from the committed signatures manifest, using
# conservative arity-unique matching (a wrong name is worse than an obvious
# placeholder, so ambiguous overloads are left untouched). Idempotent.
# The signatures manifest is committed alongside the extractor so this step
# is fully offline / reproducible.
SIGNATURES="$REPO_ROOT/tools/kdoc-extractor/signatures.json"
SIG_SCRIPT="$REPO_ROOT/tools/regen/apply-signatures.py"
if [ "$SKIP_PARAM_NAMES_EFF" == "1" ]; then
    echo "post-patches: param-name rename skipped (SKIP_PARAM_NAMES/SKIP_SOURCE_ENRICHMENT)"
elif [ -f "$SIGNATURES" ] && [ -f "$SIG_SCRIPT" ]; then
    python3 "$SIG_SCRIPT" "$PKG_ROOT" "$SIGNATURES" || \
        { echo "post-patches: ERROR — apply-signatures CRASHED (continuing; param names missing)" >&2; POSTPATCH_FAILED=1; }
else
    echo "post-patches: param-name rename skipped (signatures or apply script missing)"
fi

# -----------------------------------------------------------------------------
# W2 — @deprecated. The reflection generator doesn't surface Kotlin's
# @Deprecated annotation; apply-deprecations.py injects @deprecated TSDoc from
# the committed deprecations manifest (source-derived, so gated under the same
# doc-enrichment toggle as KDoc). Runs after apply-kdoc so it can merge into
# the doc blocks that step produced.
DEPRECATIONS="$REPO_ROOT/tools/kdoc-extractor/deprecations.json"
DEP_SCRIPT="$REPO_ROOT/tools/regen/apply-deprecations.py"
if [ "$SKIP_KDOC_EFF" == "1" ]; then
    echo "post-patches: @deprecated skipped (SKIP_KDOC/SKIP_SOURCE_ENRICHMENT)"
elif [ -f "$DEPRECATIONS" ] && [ -f "$DEP_SCRIPT" ]; then
    python3 "$DEP_SCRIPT" "$PKG_ROOT" "$DEPRECATIONS" || \
        { echo "post-patches: ERROR — apply-deprecations CRASHED (continuing; @deprecated missing)" >&2; POSTPATCH_FAILED=1; }
else
    echo "post-patches: @deprecated skipped (deprecations or apply script missing)"
fi

# -----------------------------------------------------------------------------
# W4 — document the ScriptModule.on() event overloads. apply-event-docs.py adds
# `@see {@link <Event>}` (read off the overload itself, so it's purely structural
# and runs even under SKIP_KDOC) + a one-line summary from the KDoc manifest
# (passed only when KDoc is enabled, so summaries drop but @see survives).
EVENTDOC_SCRIPT="$REPO_ROOT/tools/regen/apply-event-docs.py"
if [ -f "$EVENTDOC_SCRIPT" ]; then
    EVENTDOC_MANIFEST=""
    [ "$SKIP_KDOC_EFF" != "1" ] && EVENTDOC_MANIFEST="$MANIFEST"
    python3 "$EVENTDOC_SCRIPT" "$PKG_ROOT" $EVENTDOC_MANIFEST || \
        { echo "post-patches: ERROR — apply-event-docs CRASHED (continuing; on() docs missing)" >&2; POSTPATCH_FAILED=1; }
else
    echo "post-patches: on() event docs skipped (apply script missing)"
fi

# -----------------------------------------------------------------------------
# T-9 — kotlin.Any? nullable-suffix bleed (Issue #10)
# -----------------------------------------------------------------------------
# ts-generator emits Kotlin's `Any?` (nullable Any) verbatim, including the
# trailing `?`. In TypeScript this is:
#   - Invalid in array-element position: `kotlin.Any?[]` -> TS1005.
#   - Invalid in property-initializer position: `: kotlin.Any?[];` ->
#     TS1442/TS1144 (parser reads `?` as start of conditional/optional).
#   - Mostly tolerated in function-return position (parser treats as
#     conditional-type prefix and bails), but still semantically wrong —
#     authors get no autocomplete on the returned value.
#
# Replace every `kotlin.Any?` (with or without trailing `[]`) with
# `unknown` (or `unknown[]`), which is the structurally-correct TS
# representation of "any value, possibly null".
#
# Currently produces ~1100 substitutions; brings the tsc out-of-tree
# diagnostic count from 4 to 0.

python3 - "$PKG_ROOT/types" <<'PY'
import re
import sys
from pathlib import Path

types_root = Path(sys.argv[1])
if not types_root.is_dir():
    print(f"post-patches: T-9 skip — {types_root} not a directory", file=sys.stderr)
    sys.exit(0)

PAT = re.compile(r"\bkotlin\.Any\?(\[\])?")

def repl(m):
    return "unknown[]" if m.group(1) else "unknown"

total_files = 0
total_subs = 0
changed_files = 0

for path in types_root.rglob("*.d.ts"):
    total_files += 1
    text = path.read_text(encoding="utf-8")
    new_text, n = PAT.subn(repl, text)
    if n:
        path.write_text(new_text, encoding="utf-8")
        total_subs += n
        changed_files += 1

print(
    f"post-patches: T-9 replaced kotlin.Any? -> unknown — "
    f"{total_subs} substitutions across {changed_files}/{total_files} files"
)
PY

# ----------------------------------------------------------------------
# T-10 — strip ScriptModule.on(eventName: string, ...) so the 122 narrowed
# overloads in augmentations/ScriptModule.augmentation.d.ts can actually
# take effect. (Resolves Issue #7.)
#
# Root cause: ts-generator emits `on(eventName: string, handler: Value):
# void` directly on `ScriptModule` from the Kotlin source. The augmentation
# barrel (`augmentations/index.d.ts` → `ScriptModule.augmentation.d.ts`)
# does load — it `declare module`s the interface and adds 122 narrowed
# overloads. But TS overload resolution iterates all known signatures and
# accepts the first match; the generic `(eventName: string, ...)` accepts
# any string, so typos like `mod.on("attck", ...)` silently typecheck and
# misfire at runtime.
#
# Fix: remove the generic overload. The augmentation's overloads remain
# the only signatures for `.on(...)`, so:
#   - `mod.on("attack", e => ...)`  → e: AttackEntityEvent (already worked)
#   - `mod.on("attck", ...)`        → TS2769: name not assignable (now)
#
# The augmentation also covers `"enable" | "disable"` so the lifecycle
# events still resolve correctly.
echo "post-patches: applying T-10 (strip ScriptModule.on base overload)..."

python3 - "$PKG_ROOT/types/net/ccbluex/liquidbounce/script/bindings/features/ScriptModule.d.ts" <<'PY'
import re
import sys
from pathlib import Path

target = Path(sys.argv[1])
if not target.is_file():
    print(f"post-patches: T-10 skip — {target} not found", file=sys.stderr)
    sys.exit(0)

text = target.read_text(encoding="utf-8")
PAT = re.compile(r"^[ \t]*on\(eventName:\s*string,\s*handler:\s*Value\):\s*void;\s*$", re.MULTILINE)
new_text, n = PAT.subn(
    "    // T-10: base on() removed; see augmentations/ScriptModule.augmentation.d.ts",
    text,
)

if n == 0:
    print("post-patches: T-10 no-op (no base on() found — augmentation may already be sole signature)")
elif n == 1:
    target.write_text(new_text, encoding="utf-8")
    print("post-patches: T-10 stripped base ScriptModule.on(eventName: string, handler: Value)")
else:
    print(f"post-patches: T-10 unexpected — matched {n} times; aborting to avoid corruption", file=sys.stderr)
    sys.exit(1)
PY

# ----------------------------------------------------------------------
# T-#7 augmentation barrel sanity — keep augmentations/index.d.ts
# loading the ScriptModule augmentation as a side effect. Without this,
# the 122 narrowed `on(...)` overloads never reach the ambient surface.
# Idempotent: writes only if missing or empty.
AUG_INDEX="$PKG_ROOT/augmentations/index.d.ts"
if [[ -d "$PKG_ROOT/augmentations" ]]; then
    if [[ ! -s "$AUG_INDEX" ]] || ! grep -q "ScriptModule.augmentation" "$AUG_INDEX"; then
        cat > "$AUG_INDEX" <<'AUG'
// Augmentation barrel — side-effect import wires the augmentation files
// into the ambient module so the typed-event overloads merge with the
// ScriptModule interface. Keep as side-effect imports (not re-exports);
// the augmentation files have no values to re-export.
import './ScriptModule.augmentation';
import './ClientLevel.augmentation';
import './ScriptReflectionUtil.augmentation';
AUG
        echo "post-patches: T-#7 wrote augmentations/index.d.ts"
    else
        if ! grep -q "ClientLevel.augmentation" "$AUG_INDEX"; then
            printf "import './ClientLevel.augmentation';\n" >> "$AUG_INDEX"
            echo "post-patches: W-#18 appended ClientLevel.augmentation to barrel"
        fi
        if ! grep -q "ScriptReflectionUtil.augmentation" "$AUG_INDEX"; then
            printf "import './ScriptReflectionUtil.augmentation';\n" >> "$AUG_INDEX"
            echo "post-patches: W-#12 appended ScriptReflectionUtil.augmentation to barrel"
        fi
    fi
fi

# ----------------------------------------------------------------------
# W-#18 ClientLevel.getEntities re-expose.
#
# `mc.level` is typed as `ClientLevel`, which overrides `getEntities` with
# a single 0-arg form — shadowing the four useful overloads from the
# parent `Level`. ts-gen emits the (correct) override but the result is
# a frustrating ergonomics regression for script authors.
#
# Fix: write a hand-authored ClientLevel augmentation file that
# declaration-merges the missing overloads back onto ClientLevel.
# Idempotent: only writes when missing.
AUG_CLIENTLEVEL="$PKG_ROOT/augmentations/ClientLevel.augmentation.d.ts"
if [[ -d "$PKG_ROOT/augmentations" ]] && [[ ! -s "$AUG_CLIENTLEVEL" ]]; then
    cat > "$AUG_CLIENTLEVEL" <<'AUG'
// ClientLevel augmentation — re-expose getEntities overloads.
//
// Problem: `mc.level` is typed as `ClientLevel` (a subclass of `Level`).
// `ClientLevel` declares its own `getEntities(): LevelEntityGetter<Entity>`
// which shadows the four other overloads from the parent `Level` —
// in particular the script-author-friendly form
//   `getEntities(except, AABB, selector)`
// which TS rejects on `mc.level` even though it works at runtime.
//
// Fix: declaration-merge an interface onto `ClientLevel` that adds back
// the missing overloads. TS will accept calls in any of these shapes
// without losing the existing 0-arg method.
//
// Generic-type-parameter overloads are intentionally widened to `Entity`
// here (instead of `<T>`) because TS can't infer T across an augmented
// interface signature cleanly; script authors who need that level of
// detail can fall back to a type assertion.
//
// `except` accepts `Entity | LocalPlayer | null` rather than just
// `Entity | null` because LocalPlayer redeclares one of Entity's
// overloaded methods (`onSyncedDataUpdated`) with fewer overloads,
// making LocalPlayer structurally non-assignable to Entity (TS
// overload variance is invariant on parameter list). The
// `mc.level.getEntities(mc.player, …)` call is by far the most common
// script pattern, so the union is worth its weight. See audit W19.

import type { Entity } from '../types/net/minecraft/world/entity/Entity.d.ts';
import type { EntityTypeTest } from '../types/net/minecraft/world/level/entity/EntityTypeTest.d.ts';
import type { AABB } from '../types/net/minecraft/world/phys/AABB.d.ts';
import type { LocalPlayer } from '../types/net/minecraft/client/player/LocalPlayer.d.ts';

declare module '../types/net/minecraft/client/multiplayer/ClientLevel' {
    interface ClientLevel {
        getEntities(except: Entity | LocalPlayer | null, bb: AABB, selector: (param0: Entity) => kotlin.Boolean): Entity[];
        getEntities(type: EntityTypeTest<Entity, Entity>, bb: AABB, selector: (param0: Entity) => kotlin.Boolean): Entity[];
        getEntities(type: EntityTypeTest<Entity, Entity>, bb: AABB, selector: (param0: Entity) => kotlin.Boolean, output: Entity[]): void;
        getEntities(type: EntityTypeTest<Entity, Entity>, bb: AABB, selector: (param0: Entity) => kotlin.Boolean, output: Entity[], maxResults: number): void;
    }
}
AUG
    echo "post-patches: W-#18 wrote augmentations/ClientLevel.augmentation.d.ts"
fi

# ----------------------------------------------------------------------
# W-#12 ScriptReflectionUtil narrowing.
#
# ts-gen emits ScriptReflectionUtil methods with `Class<Object>` params
# and `Object | null` returns (audit row W12 — reflection types leak).
# Scripts that know what they're asking for still get back raw Object.
#
# Fix: declaration-merge an interface onto ScriptReflectionUtil that adds
# generic overloads — callers passing a typed Class<T> get back T | null.
# The original `Class<Object>` overloads remain (TS declaration merging
# is additive); overload resolution picks the more-specific generic form
# at the call site. Idempotent: only writes when missing.
AUG_REFLECT="$PKG_ROOT/augmentations/ScriptReflectionUtil.augmentation.d.ts"
if [[ -d "$PKG_ROOT/augmentations" ]] && [[ ! -s "$AUG_REFLECT" ]]; then
    cat > "$AUG_REFLECT" <<'AUG'
// ScriptReflectionUtil augmentation — generic-typed overloads for reflection.
//
// Problem: ts-gen emits ScriptReflectionUtil methods with `Class<Object>`
// parameters and `Object | null` returns (audit row W12). Scripts that
// know what type they're asking for still get back an opaque `Object` and
// have to cast everywhere.
//
// Fix: declaration-merge generic overloads onto the class so callers that
// pass a typed `Class<T>` (or know the type they expect) get back `T | null`
// instead of `Object | null`. The original `Class<Object>` overloads
// remain (declaration merging is additive); TS overload resolution picks
// the more-specific generic form when the call site provides a typed
// Class. ~25 LOC, see audit W12 for context.

import type { Class } from '../types/java/lang/Class.d.ts';
import type { Object } from '../types/java/lang/Object.d.ts';

// Generic-parameter semantics:
//   * `clazz: Class<T>` propagates ONLY when the return is an actual instance
//     of T (i.e. `newInstance`). For `getDeclaredField` the return is the
//     static field's value type, which has no relation to T — so the
//     class parameter stays `Class<Object>` and the caller annotates the
//     expected field-value type as `T` (same pattern as the existing
//     invoke* overloads).
//   * `obj: Object` stays `Object` everywhere — the object's runtime type
//     does not constrain the field/return type the caller is asking for.
//   * Where T appears in the return-type position only, it is unconstrained
//     and acts as a caller-asserted cast. Same pattern as the existing
//     `invokeDeclaredMethod<R>` / `invokeMethod<R>` shape used at runtime.

declare module '../types/net/ccbluex/liquidbounce/script/bindings/api/ScriptReflectionUtil' {
    interface ScriptReflectionUtil {
        getDeclaredField<T extends Object>(clazz: Class<Object>, name: string): T | null;
        getField<T extends Object>(obj: Object, name: string): T | null;
        invokeDeclaredMethod<R extends Object>(clazz: Class<Object>, name: string, args: (Object | null)[]): R | null;
        invokeMethod<R extends Object>(obj: Object, name: string, args: (Object | null)[]): R | null;
        newInstance<T extends Object>(clazz: Class<T>, args: (Object | null)[]): T | null;
        newInstanceByName<T extends Object>(name: string, args: (Object | null)[]): T | null;
        newInstanceByObject<T extends Object>(obj: Object, args: (Object | null)[]): T | null;
    }
}
AUG
    echo "post-patches: W-#12 wrote augmentations/ScriptReflectionUtil.augmentation.d.ts"
fi

if [[ "$POSTPATCH_FAILED" == "1" ]]; then
  echo "post-patches: FAILED — one or more source-enrichment steps crashed (see ERROR lines above); the output is INCOMPLETE." >&2
  exit 1
fi

echo "post-patches: done ($PKG_ROOT)"

# ----------------------------------------------------------------------
# T-#JS-1 fix typesVersions wildcard so `types/foo` resolves to
# `./types/foo` instead of the doubled `./types/types/foo`. The upstream
# NPMGen emits a single wildcard pattern `*` → ["./types/*",
# "./augmentations/*", "ambient/..."], which prefixes "types/" twice when
# the import path already starts with "types/". Splitting into three
# explicit key patterns (types/*, augmentations/*, ambient) lets users
# write `import { X } from "<pkg>/types/net/.../X"` and have it resolve.
PKG_JSON="$PKG_ROOT/package.json"
if [[ -f "$PKG_JSON" ]]; then
    python3 - "$PKG_JSON" <<'PY'
import json
import sys
from pathlib import Path

target = Path(sys.argv[1])
data = json.loads(target.read_text(encoding="utf-8"))
wanted = {
    "*": {
        "types/*": ["./types/*"],
        "augmentations/*": ["./augmentations/*"],
        "ambient": ["./ambient/ambient.d.ts"],
    }
}
if data.get("typesVersions") != wanted:
    data["typesVersions"] = wanted
    target.write_text(json.dumps(data, indent=4) + "\n", encoding="utf-8")
    print("post-patches: T-#JS-1 rewrote package.json typesVersions (path-prefixed keys)")
else:
    print("post-patches: T-#JS-1 no-op (typesVersions already correct)")
PY
fi

# ---------------------------------------------------------------------------
# Binding-type corrections (F1/F2/F4/F5/F6) — see fix-binding-types.py.
# Idempotent; runs last so it also cleans anything re-emitted above.
# ---------------------------------------------------------------------------
python3 "$(dirname "$0")/fix-binding-types.py" "$PKG_ROOT" || \
  echo "post-patches: WARNING fix-binding-types.py failed" >&2

# ---------------------------------------------------------------------------
# F7 — field/method name collisions. Java lets a field and a method share a
# name (Mojang `onGround` + `onGround()`, records, JOML math, Map.Entry); TS
# forbids it and the field declaration silently shadows the method. Drop one
# declaration per class so the survivor is usable (mutable field + pure getter
# -> keep field; otherwise keep the method). Idempotent. See
# fix-member-collisions.py. (To be folded into the Kotlin generator next regen.)
# ---------------------------------------------------------------------------
python3 "$(dirname "$0")/fix-member-collisions.py" "$PKG_ROOT" || \
  { echo "post-patches: ERROR — fix-member-collisions.py CRASHED" >&2; POSTPATCH_FAILED=1; }
