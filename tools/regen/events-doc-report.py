#!/usr/bin/env python3
"""Emit a Markdown report listing every script-visible event whose
generated `.d.ts` lacks TSDoc on the class declaration.

Why this report matters: script authors using `script.on("evt", ...)` see
the event class's TSDoc as IDE hover info. An undocumented event class is
exactly the kind of thing a Phase A hand-written KDoc block would
benefit, so the report doubles as a prioritised worklist.

Inputs are taken from the committed types package:
  * `augmentations/ScriptModule.augmentation.d.ts` — authoritative list
    of (eventName, EventClass) pairs script authors actually subscribe
    to. We parse the `on(eventName: "...", handler: (...: Foo) => void)`
    overloads. The augmentation is generated from LB's
    `ScriptModule.on` Kotlin annotations, so this stays in sync with
    upstream's intent.
  * `types/.../events/<EventClass>.d.ts` — for each event class, look at
    the lines immediately above `export class <EventClass>` for a `/**`
    block. Anything else (no comment, `// foo` only, etc.) counts as
    undocumented.

Output is written to `docs/upstream-type-issues/notes/
events-doc-report.md`. The script exits 0 always; the CI step is
informational. The summary line at the top makes regressions obvious in
review.

Usage:
  python3 tools/regen/events-doc-report.py            # write report
  python3 tools/regen/events-doc-report.py --check    # exit 1 if the
                                                       # committed
                                                       # report is
                                                       # stale
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
TYPES_PKG = REPO_ROOT / "packages" / "script-api-types"
AUGMENTATION = TYPES_PKG / "augmentations" / "ScriptModule.augmentation.d.ts"
TYPES_ROOT = TYPES_PKG / "types"
REPORT_PATH = REPO_ROOT / "docs" / "upstream-type-issues" / "notes" / "events-doc-report.md"

# Each augmentation entry looks like:
#   on(eventName: "chatReceive", handler: (chatReceiveEvent: ChatReceiveEvent) => void): void;
# We capture the event name (the JS-side string passed to `.on()`) and
# the TypeScript Event class symbol used to type the handler payload.
ON_OVERLOAD = re.compile(
    r'^on\(eventName:\s*"(?P<name>[^"]+)",\s*handler:\s*'
    r'\([^:]+:\s*(?P<klass>[A-Za-z_][\w$]*)\)\s*=>\s*void\)\s*:\s*void;\s*$',
    re.MULTILINE,
)
# Top-of-file `import type { Foo } from '<path>'` lines — we resolve
# `klass` to a file path via these.
IMPORT_LINE = re.compile(
    r"^import\s+type\s+\{\s*(?P<klass>[A-Za-z_][\w$]*)\s*\}\s+from\s+'(?P<path>[^']+)';?\s*$",
    re.MULTILINE,
)


def parse_augmentation() -> list[tuple[str, str, Path | None]]:
    """Return ordered list of (event_name, class_symbol, dts_path | None)
    pairs. Path is None when the import can't be resolved (shouldn't
    happen on a well-formed augmentation, but we surface it so the
    report still shows the gap)."""
    text = AUGMENTATION.read_text(encoding="utf-8")
    imports: dict[str, Path] = {}
    for m in IMPORT_LINE.finditer(text):
        rel = m.group("path")
        # Relative paths from augmentations/ ; strip optional `.d.ts`
        # and normalise.
        if rel.endswith(".d.ts"):
            rel = rel[:-5]
        target = (AUGMENTATION.parent / (rel + ".d.ts")).resolve()
        imports[m.group("klass")] = target
    out: list[tuple[str, str, Path | None]] = []
    for m in ON_OVERLOAD.finditer(text):
        klass = m.group("klass")
        out.append((m.group("name"), klass, imports.get(klass)))
    return out


# Match the line that declares the event class itself.
CLASS_DECL = re.compile(
    r"^export\s+(?:abstract\s+)?class\s+([A-Za-z_][\w$]*)\b",
    re.MULTILINE,
)


def class_has_tsdoc(path: Path, klass: str) -> bool:
    """True iff the `export class <klass>` declaration in `path` has a
    `/** … */` TSDoc block immediately above it (allowing only blank
    lines between the comment close and the declaration)."""
    if path is None or not path.is_file():
        return False
    src = path.read_text(encoding="utf-8")
    for m in CLASS_DECL.finditer(src):
        if m.group(1) != klass:
            continue
        # Walk upward from the declaration line, skipping blank lines
        # and matching `*/` then `/**` (possibly with content
        # in-between).
        lead = src[: m.start()].rstrip()
        if not lead.endswith("*/"):
            return False
        # Walk back to the matching `/**`.
        end = lead.rfind("/**")
        if end == -1:
            return False
        # The block must be at the start of a line (after stripped
        # whitespace) — i.e. it must be a doc comment, not an inline
        # comment dangling off code.
        line_start = lead.rfind("\n", 0, end) + 1
        between = lead[line_start:end]
        if between.strip() != "":
            return False
        return True
    return False


def build_report(entries: list[tuple[str, str, Path | None]]) -> str:
    total = len(entries)
    documented: list[tuple[str, str, Path | None]] = []
    undocumented: list[tuple[str, str, Path | None]] = []
    for name, klass, path in entries:
        (documented if class_has_tsdoc(path, klass) else undocumented).append(
            (name, klass, path)
        )
    pct = (len(documented) / total * 100.0) if total else 0.0

    lines: list[str] = []
    lines.append("# Events doc-coverage report")
    lines.append("")
    lines.append(
        "Auto-generated by `tools/regen/events-doc-report.py`. Lists "
        "every event a script can subscribe to via "
        "`script.on(...)`, with documentation status on the generated "
        "event class. This is a *prioritised worklist* for Phase A "
        "hand-written KDoc — any line in the undocumented section is a "
        "candidate for a curated entry that will appear in IDE hover "
        "info."
    )
    lines.append("")
    lines.append(
        "Inputs: `augmentations/ScriptModule.augmentation.d.ts` (the "
        "authoritative `on(eventName, ...)` overload list) + the "
        "matching event class `.d.ts` files. Re-run after every regen."
    )
    lines.append("")
    lines.append("## Summary")
    lines.append("")
    lines.append("```")
    lines.append(f"total events scriptable:  {total}")
    lines.append(f"  documented:             {len(documented)} ({pct:.1f}%)")
    lines.append(f"  undocumented:           {len(undocumented)}")
    lines.append("```")
    lines.append("")
    lines.append("## Undocumented events")
    lines.append("")
    if not undocumented:
        lines.append("_None — every scriptable event has a TSDoc block._")
        lines.append("")
    else:
        lines.append(
            "Each entry below is a Phase-A candidate: writing a KDoc on "
            "the Kotlin source (or adding a curated entry in "
            "`tools/regen/post-patches.sh`) makes the documentation "
            "appear in IDE hover for `script.on(\"<name>\", ...)`."
        )
        lines.append("")
        lines.append("```")
        # Right-pad event-name column for alignment without using
        # Markdown tables (Discord renders them poorly per Obus
        # convention).
        name_w = max(len(name) for name, _, _ in undocumented)
        klass_w = max(len(klass) for _, klass, _ in undocumented)
        for name, klass, path in undocumented:
            rel = path.relative_to(REPO_ROOT) if path is not None else "(missing import)"
            lines.append(f'  "{name}"'.ljust(name_w + 5) +
                         f"  {klass:<{klass_w}}  {rel}")
        lines.append("```")
        lines.append("")
    lines.append("## Documented events")
    lines.append("")
    lines.append(f"<details><summary>{len(documented)} events with TSDoc</summary>")
    lines.append("")
    lines.append("```")
    for name, klass, path in documented:
        lines.append(f'  "{name}"  →  {klass}')
    lines.append("```")
    lines.append("")
    lines.append("</details>")
    lines.append("")
    return "\n".join(lines)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--check",
        action="store_true",
        help="Exit non-zero if the committed report is out of date.",
    )
    args = parser.parse_args()

    if not AUGMENTATION.is_file():
        print(f"events-doc-report: SKIP — {AUGMENTATION} missing", file=sys.stderr)
        return 0
    entries = parse_augmentation()
    if not entries:
        print(
            "events-doc-report: SKIP — augmentation has no on(eventName, ...) overloads",
            file=sys.stderr,
        )
        return 0
    new = build_report(entries)
    if args.check:
        if not REPORT_PATH.is_file():
            print(
                f"events-doc-report: STALE — {REPORT_PATH} does not exist; "
                "run `python3 tools/regen/events-doc-report.py`",
                file=sys.stderr,
            )
            return 1
        existing = REPORT_PATH.read_text(encoding="utf-8")
        if existing != new:
            print(
                f"events-doc-report: STALE — committed report at "
                f"{REPORT_PATH} doesn't match current types tree; "
                "run `python3 tools/regen/events-doc-report.py`",
                file=sys.stderr,
            )
            return 1
        print(f"events-doc-report: OK — {REPORT_PATH} is up to date")
        return 0

    REPORT_PATH.parent.mkdir(parents=True, exist_ok=True)
    REPORT_PATH.write_text(new, encoding="utf-8")
    docu = sum(1 for _, k, p in entries if class_has_tsdoc(p, k))
    print(
        f"events-doc-report: wrote {REPORT_PATH.relative_to(REPO_ROOT)} — "
        f"{docu}/{len(entries)} documented "
        f"({docu / len(entries) * 100:.1f}%)"
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
