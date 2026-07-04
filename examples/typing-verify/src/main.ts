/// <reference types="@wunk/lb-script-api-types/ambient" />
//
// TypingVerify - runtime verification of @wunk/lb-script-api-types.
//
// Every probe below exercises a surface this types build fixed or hardened.
// Each prints exactly one line to stdout: "[TypingVerify] OK <probe>: <detail>"
// or "[TypingVerify] FAIL <probe>: <error>" - so the harness can assert the
// outcome from the client log. The same checks are *compile-time* proofs too:
// this file typechecks with the strict stock consumer config.
//
// Probes:
//   F8  localStorage is the Java ConcurrentHashMap facade (put/get/size)
//   F9  Axis / RotationAxis are class handles (static XP..ZN constants)
//   F6  Hand alias for InteractionHand
//   F4  SilentHotbar is NOT a global - reached via Java.type (and the global
//       really is absent at runtime)
//   T-5 Setting factories (typed option objects), .get() value access
//   E   typed per-event on() overloads incl. the nested TitleEvent classes
//       (compile-time: payload types resolve; runtime: handlers register)

import type { SilentHotbar } from "@wunk/lb-script-api-types/types/net/ccbluex/liquidbounce/utils/client/SilentHotbar";

const TAG = "[TypingVerify]";
const ok = (probe: string, detail: unknown): void => print(`${TAG} OK ${probe}: ${String(detail)}`);
const fail = (probe: string, err: unknown): void => print(`${TAG} FAIL ${probe}: ${String(err)}`);

const script = registerScript({
    name: "TypingVerify",
    version: "1.0.0",
    authors: ["obus"],
});

const POWER = Setting.int({ name: "Power", default: 3, range: [0, 10], suffix: "x" });

function runProbes(): void {
    try {
        localStorage.put("tv-key", 42);
        const got: unknown = localStorage.get("tv-key");
        ok("F8 localStorage facade", `get=${got} size=${localStorage.size()} containsKey=${localStorage.containsKey("tv-key")}`);
    } catch (e) { fail("F8 localStorage facade", e); }

    try {
        const q = RotationAxis.static.YP.rotationDegrees(90);
        ok("F9 RotationAxis.static.YP.rotationDegrees(90)", q);
    } catch (e) { fail("F9 RotationAxis", e); }

    try {
        const q = Axis.static.ZP.rotation(1.0);
        ok("F9 Axis.static.ZP.rotation(1.0)", q);
    } catch (e) { fail("F9 Axis", e); }

    try {
        const main = Hand.static.MAIN_HAND;
        const off = Hand.static.OFF_HAND;
        if (main == null || off == null) { fail("F6 Hand.static alias", "constants are null/undefined"); }
        else { ok("F6 Hand.static alias", `MAIN_HAND=${main} OFF_HAND=${off}`); }
    } catch (e) { fail("F6 Hand.static alias", e); }

    try {
        // Single-overload class: direct `new` carries the signature.
        const v = new Vec3i(7, 64, -7);
        // Overloaded ctors: `.static` carries the FULL overload set.
        const bp = new (BlockPos.static)(7, 64, -7);
        ok("F10 direct construction", `Vec3i=${v} BlockPos=${bp}`);
    } catch (e) { fail("F10 direct construction", e); }

    try {
        ok("F10 MathHelper.static.clamp(5,0,3)", MathHelper.static.clamp(5, 0, 3));
    } catch (e) { fail("F10 MathHelper.static.clamp", e); }

    try {
        const sh = Java.type<{ INSTANCE: SilentHotbar }>(
            "net.ccbluex.liquidbounce.utils.client.SilentHotbar").INSTANCE;
        ok("F4 SilentHotbar via Java.type", `serversideSlot=${sh.serversideSlot} modified=${sh.isSlotModified()}`);
    } catch (e) { fail("F4 SilentHotbar via Java.type", e); }

    // The old typings exported SilentHotbar as an ambient global; the runtime
    // never had it. Prove the global is really absent.
    const ghost = typeof (globalThis as Record<string, unknown>).SilentHotbar;
    if (ghost === "undefined") {
        ok("F4 global absence", "typeof globalThis.SilentHotbar === 'undefined' (as typed)");
    } else {
        fail("F4 global absence", `unexpected global of type ${ghost}`);
    }

    try {
        ok("T-5 Setting.int factory", `Power=${POWER.get()}`);
    } catch (e) { fail("T-5 Setting.int factory", e); }
}

script.registerModule({
    name: "TypingVerify",
    category: "Misc",
    description: "Verifies @wunk/lb-script-api-types runtime contracts.",
}, (mod) => {
    mod.on("enable", () => {
        print(`${TAG} module enabled - running probes`);
        runProbes();
    });

    // Typed payload overloads - the nested TitleEvent classes were silently
    // `any` before the binary-name import fix; now they typecheck for real.
    mod.on("title", (e) => print(`${TAG} title event: ${e.text}`));
    mod.on("subtitle", (e) => print(`${TAG} subtitle event: ${e.text}`));
    mod.on("attack", (e) => print(`${TAG} attack on ${e.entity}`));
    mod.on("playerJump", (e) => print(`${TAG} jump motion=${e.motion}`));
});

script.on("load", () => {
    print(`${TAG} script loaded - running probes at load time`);
    runProbes();
});
