#!/usr/bin/env python3
"""Wave-2 script-API surface post-patches (2026-07-16 audit, A6/A8/A9).

Per-file refinements over the generated .d.ts that can't come from reflection
alone. Each edit is idempotent (guarded by a sentinel or a check that the old
form is still present), so re-running over an already-patched tree is a no-op.

  A6  PolyglotScript.registerCommand(commandObject: Value) -> a structured
      ScriptCommandObject (name/aliases/parameters/subcommands/onExecute/hub),
      matching what ScriptCommandBuilder.kt actually reads off the object.
  A8  Hot Minecraft/Gui members that are null without a world (mc.player,
      mc.level, mc.hitResult, ... ; Gui.screen()/overlay()) typed `| null`;
      Gui.setScreen accepts `Screen | null` (LB calls setScreen(null)).
  A9  ScriptAsyncUtil methods that return a JS Promise at runtime typed
      `Promise<T>` instead of the opaque GraalVM `Value`, plus the
      @JvmName'd completableFutureToPromise the reflection walk dropped.

Usage: apply-wave2.py <package-root>   (the @ccbluex/... dir with types/, ...)
"""
from __future__ import annotations

import sys
from pathlib import Path

pkg = Path(sys.argv[1])
types = pkg / "types"
changed: list[str] = []


def edit(rel: str, fn) -> None:
    p = types / rel
    if not p.is_file():
        print(f"apply-wave2: skip - {rel} not found", file=sys.stderr)
        return
    src = p.read_text()
    out = fn(src)
    if out is None or out == src:
        return
    p.write_text(out)
    changed.append(rel)


# --- A6: registerCommand structured object ---------------------------------
POLY = "net/ccbluex/liquidbounce/script/PolyglotScript.d.ts"
CMD_MARKER = "// A6: ScriptCommandObject begin"
CMD_BLOCK = """// A6: ScriptCommandObject begin
/**
 * The plain object passed to `registerScript(...).registerCommand(...)`.
 * Mirrors what `ScriptCommandBuilder` reads off the value at runtime.
 */
export interface ScriptCommandParameter {
    /** Parameter name shown in usage/autocomplete. */
    name: string;
    /** Defaults to optional; set true to require the parameter. */
    required?: boolean;
    /** Consumes the rest of the input as one vararg parameter. */
    vararg?: boolean;
    /** Autocomplete provider: return the candidate completions. */
    getCompletions?: (begin: string, args: string[]) => string[];
    /** Validator: accept + parsed value, or reject with an error message. */
    validate?: (input: string) => { accept: boolean; value?: unknown; error?: string };
}
export interface ScriptCommandObject {
    /** Primary command name (what the user types after the prefix). */
    name: string;
    /** Alternative names for the command. */
    aliases?: string[];
    /** Positional parameters, in order. */
    parameters?: ScriptCommandParameter[];
    /** Nested subcommands (same shape, recursively). */
    subcommands?: ScriptCommandObject[];
    /** Handler invoked with the parsed argument values. */
    onExecute?: (...args: unknown[]) => void;
    /** Marks this as a hub command (dispatches only to subcommands). */
    hub?: boolean;
}
// A6: ScriptCommandObject end
"""


def a6(src: str):
    if CMD_MARKER in src:
        new = src
    else:
        # Inject the interfaces just before the class declaration (after imports).
        anchor = "export class PolyglotScript"
        if anchor not in src:
            print("apply-wave2: A6 - PolyglotScript class not found", file=sys.stderr)
            return None
        new = src.replace(anchor, CMD_BLOCK + "\n" + anchor, 1)
    old = "    registerCommand(commandObject: Value): void;"
    repl = "    registerCommand(commandObject: ScriptCommandObject): void;"
    if old in new:
        new = new.replace(old, repl, 1)
    return new


edit(POLY, a6)


# --- A8: hot Minecraft / Gui nullability -----------------------------------
# Members that are null before a world/screen exists. LB's own source
# null-checks each (MinecraftExtensions.kt, InventoryExtensions.kt, ...).
MC = "net/minecraft/client/Minecraft.d.ts"
MC_NULLABLE = [
    ("    crosshairPickEntity: Entity;", "    crosshairPickEntity: Entity | null;"),
    ("    gameMode: MultiPlayerGameMode;", "    gameMode: MultiPlayerGameMode | null;"),
    ("    hitResult: HitResult;", "    hitResult: HitResult | null;"),
    ("    level: ClientLevel;", "    level: ClientLevel | null;"),
    ("    player: LocalPlayer;", "    player: LocalPlayer | null;"),
    ("    getCameraEntity(): Entity;", "    getCameraEntity(): Entity | null;"),
    ("    getConnection(): ClientPacketListener;", "    getConnection(): ClientPacketListener | null;"),
    ("    getCurrentServer(): ServerData;", "    getCurrentServer(): ServerData | null;"),
    ("    getSingleplayerServer(): IntegratedServer;", "    getSingleplayerServer(): IntegratedServer | null;"),
]
GUI = "net/minecraft/client/gui/Gui.d.ts"
GUI_NULLABLE = [
    ("    overlay(): Overlay;", "    overlay(): Overlay | null;"),
    ("    screen(): Screen;", "    screen(): Screen | null;"),
    ("    setScreen(screen: Screen): void;", "    setScreen(screen: Screen | null): void;"),
]


def apply_pairs(pairs):
    def fn(src: str):
        for old, new in pairs:
            if old in src:
                src = src.replace(old, new, 1)
        return src
    return fn


edit(MC, apply_pairs(MC_NULLABLE))
edit(GUI, apply_pairs(GUI_NULLABLE))


# --- A9: AsyncUtil Promise typing ------------------------------------------
# At runtime these return a real JS Promise (jsPromiseConstructor.newInstance);
# the reflection walk saw the opaque GraalVM `Value`. Retype to Promise<T> and
# add the @JvmName'd completableFutureToPromise the walk dropped entirely.
ASYNC = "net/ccbluex/liquidbounce/script/bindings/api/ScriptAsyncUtil.d.ts"
A9_IMPORTS = [
    "import type { Response } from '../../../../../../okhttp3/Response.d.ts'",
    "import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'",
]
A9_RETURNS = [
    ("    conditional(ticks: number, breakLoop: () => boolean): Value;",
     "    conditional(ticks: number, breakLoop: () => boolean): Promise<number>;"),
    ("    launch<T extends unknown>(executor: Executor, block: () => T): Value;",
     "    launch<T extends unknown>(executor: Executor, block: () => T): Promise<T>;"),
    ("    launch<T extends unknown>(block: () => T): Value;",
     "    launch<T extends unknown>(block: () => T): Promise<T>;"),
    ("    request(block: (param0: Request$Builder) => void): Value;",
     "    request(block: (param0: Request$Builder) => void): Promise<Response>;"),
    ("    ticks(n: number): Value;", "    ticks(n: number): Promise<number>;"),
    ("    until(condition: () => boolean): Value;", "    until(condition: () => boolean): Promise<number>;"),
]


def a9(src: str):
    orig = src
    # imports (idempotent): add after the last existing import line.
    for imp in A9_IMPORTS:
        if imp not in src:
            idx = src.rfind("\nimport type")
            end = src.index("\n", idx + 1)
            src = src[:end] + "\n" + imp + src[end:]
    for old, new in A9_RETURNS:
        if old in src:
            src = src.replace(old, new, 1)
    # completableFutureToPromise (@JvmName'd extension the walk dropped).
    if "completableFutureToPromise" not in src:
        anchor = "    conditional("
        if anchor in src:
            method = ("    /**\n"
                      "     * Bridges a Java {@link CompletableFuture} to a JS `Promise`, resolved\n"
                      "     * or rejected on the render thread. (Runtime: @JvmName extension.)\n"
                      "     */\n"
                      "    completableFutureToPromise<T>(future: CompletableFuture<T>): Promise<T>;\n")
            src = src.replace(anchor, method + anchor, 1)
    return src if src != orig else None


edit(ASYNC, a9)


print("apply-wave2: " + (", ".join(changed) if changed else "no changes (already applied)"))
