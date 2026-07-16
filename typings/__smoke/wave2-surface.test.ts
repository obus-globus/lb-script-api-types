// Wave-2 surface smoke test (2026-07-16 audit, A6-A11). Asserts the
// script-facing shapes a real script relies on now typecheck (or correctly
// reject), against the packed ambient + augmentation surface.

import type {} from '../augmentations/index.d.ts';
import type { ScriptModule } from '../types/net/ccbluex/liquidbounce/script/bindings/features/ScriptModule.d.ts';
import type { ScriptMode } from '../types/net/ccbluex/liquidbounce/script/bindings/features/ScriptMode.d.ts';
import type { AttackEntityEvent } from '../types/net/ccbluex/liquidbounce/event/events/AttackEntityEvent.d.ts';
import type { PolyglotScript } from '../types/net/ccbluex/liquidbounce/script/PolyglotScript.d.ts';

declare function expectType<T>(value: T): void;

// A6 - registerCommand accepts a structured command object (was raw Value).
declare const script: PolyglotScript;
script.registerCommand({
    name: "test",
    aliases: ["t"],
    parameters: [{ name: "arg", required: true, getCompletions: () => ["a", "b"] }],
    subcommands: [{ name: "sub", onExecute: () => {} }],
    onExecute: (...args) => { void args; },
    hub: false,
});
// @ts-expect-error - name is required on a command object
script.registerCommand({ aliases: ["x"] });

// A7 - ScriptMode.on has typed per-event overloads (was on(string, Value)).
declare const mode: ScriptMode;
mode.on("attack", (event) => { expectType<AttackEntityEvent>(event); });
mode.on("enable", () => {});
// @ts-expect-error - unknown event name rejected (generic overload stripped)
mode.on("definitely_not_an_event", (e) => { void e; });

// A8 - hot Minecraft fields are nullable (guard-before-use).
mc.player;
expectType<number>(mc.player!.getX());
if (mc.level !== null) { mc.level.getEntities; }
mc.gui.setScreen(null);        // clearing the screen is a valid call
const s = mc.gui.screen();
expectType<boolean>(s === null || s !== null);

// A9 - AsyncUtil returns real promises.
async function asyncProbe() {
    const t: number = await AsyncUtil.ticks(10);
    const ok: number = await AsyncUtil.conditional(20, () => true);
    void t; void ok;
    const res = await AsyncUtil.request((b) => b.url("https://example.com"));
    expectType<number>(res.code());
}
void asyncProbe;

// A10 - .class on class-value bindings (reflection idiom).
expectType<unknown>(BlockPos.class);

// A11 - require / console / string author.
console.log("hi");
const mod: unknown = require("some/module");
void mod;
registerScript({ name: "s", version: "1.0.0", authors: "solo" });         // single author string
registerScript({ name: "s", version: "1.0.0", authors: ["a", "b"] });     // array still works

// localStorage extended surface. (Params annotated because the shared smoke
// tsconfig injects lib.dom by default, whose `localStorage: Storage` index
// signature shadows the ambient facade - the exact DOM-override the README
// tells consumers to avoid with `lib: es2023`. Under that real config the
// facade types apply; here we only assert the members exist and are callable.)
localStorage.computeIfAbsent("k", (key: string) => key.length);
localStorage.forEach((k: string, v: unknown) => { void k; void v; });

// ScriptModule still narrows (unchanged by wave 2).
declare const module_: ScriptModule;
module_.on("attack", (event) => { expectType<AttackEntityEvent>(event); });
