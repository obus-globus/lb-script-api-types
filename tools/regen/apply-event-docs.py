#!/usr/bin/env python3
"""
apply-event-docs - W4 post-patch.

Adds a TSDoc block to each generated `ScriptModule.on(eventName, handler)`
overload in `augmentations/ScriptModule.augmentation.d.ts`:

    /**
     * <event class summary, if the event has KDoc>
     * @see {@link AttackEntityEvent}
     */
    on(eventName: "attack", handler: (e: AttackEntityEvent) => void): void;

The event class is read straight off each overload (the handler parameter
type), so no extra manifest is needed for the `@see`. An optional one-line
summary is pulled from the KDoc manifest when the event class is documented.

Idempotent: overloads that already have a doc block above are skipped.

Run:
    apply-event-docs.py <pkg-root> [kdoc-manifest.json]
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path
from typing import Optional


AUG_REL = "augmentations/ScriptModule.augmentation.d.ts"

# on(eventName: "name", handler: (param: EventType) => void): void;
OVERLOAD_RE = re.compile(
    r'^(?P<indent>[ \t]*)on\(eventName:\s*"[^"]+",\s*handler:\s*'
    r'\([^:)]*:\s*(?P<event>[A-Za-z_$][A-Za-z0-9_$]*)\s*\)\s*=>\s*void\)\s*:\s*void;\s*$'
)
IMPORT_RE = re.compile(
    r"^import\s+type\s+\{\s*(?P<name>[A-Za-z_$][A-Za-z0-9_$]*)\s*\}\s*from\s*"
    r"'(?P<path>[^']+)'"
)


def manifest_docs(manifest_path: Optional[Path]) -> dict[str, str]:
    """fqn -> first KDoc summary line, for event classes."""
    if not manifest_path or not manifest_path.exists():
        return {}
    raw = json.loads(manifest_path.read_text(encoding="utf-8"))
    entries = raw.get("entries", raw) if isinstance(raw, dict) else {}
    out: dict[str, str] = {}
    for fqn, entry in entries.items():
        e = entry[0] if isinstance(entry, list) else entry
        if not isinstance(e, dict):
            continue
        doc = (e.get("doc") or "").strip()
        if doc:
            out[fqn] = doc.split("\n", 1)[0].strip()
    return out


def main(argv: list[str]) -> int:
    ap = argparse.ArgumentParser(prog="apply-event-docs")
    ap.add_argument("pkg_root", type=Path)
    # One or more KDoc manifests. Earlier manifests win (the extracted upstream
    # manifest is passed first, the hand-authored W3 overlay second), so an
    # overlay summary only fills a gap where upstream has no KDoc.
    ap.add_argument("manifest", type=Path, nargs="*", default=[])
    args = ap.parse_args(argv)

    aug = args.pkg_root.resolve() / AUG_REL
    if not aug.is_file():
        print(f"apply-event-docs: skip - {aug} not found", file=sys.stderr)
        return 0

    docs: dict[str, str] = {}
    for mp in args.manifest:
        for fqn, summary in manifest_docs(mp).items():
            docs.setdefault(fqn, summary)
    lines = aug.read_text(encoding="utf-8").split("\n")

    # name -> fqn from the import block.
    name_to_fqn: dict[str, str] = {}
    for ln in lines:
        m = IMPORT_RE.match(ln)
        if m:
            path = m.group("path")
            fqn = path.split("types/", 1)[-1].removesuffix(".d.ts").replace("/", ".")
            name_to_fqn[m.group("name")] = fqn

    out: list[str] = []
    injected = 0
    for idx, ln in enumerate(lines):
        m = OVERLOAD_RE.match(ln)
        if m:
            # Already documented? Look back past blank lines for a closing `*/`.
            prev = ""
            for j in range(len(out) - 1, -1, -1):
                if out[j].strip():
                    prev = out[j].strip()
                    break
            if prev.endswith("*/"):
                out.append(ln)
                continue
            indent = m.group("indent")
            event = m.group("event")
            summary = docs.get(name_to_fqn.get(event, ""), "")
            out.append(f"{indent}/**")
            if summary:
                out.append(f"{indent} * {summary}")
            out.append(f"{indent} * @see {{@link {event}}}")
            out.append(f"{indent} */")
            injected += 1
        out.append(ln)

    aug.write_text("\n".join(out), encoding="utf-8")
    print(f"apply-event-docs: documented {injected} on() overload(s)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
