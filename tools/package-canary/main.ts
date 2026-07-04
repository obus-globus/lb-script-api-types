// Packaging canary - compiled against the PACKED package (npm pack ->
// install tarball), with a stock consumer tsconfig. Catches what the
// in-repo gate structurally can't: files-glob mistakes, typesVersions
// resolution, the `types` entry, and ambient/augmentation wiring as a
// consumer actually experiences it (skipLibCheck: true).
//
// Same convention as the __smoke suite: positive probes must compile,
// negative probes use @ts-expect-error - if a type silently degrades to
// `any`, the directive turns unused (TS2578) and the canary fails.

const script = registerScript({ name: "canary", version: "1.0.0", authors: ["ci"] });

script.registerModule({ name: "m", category: "Combat", description: "d" }, (module) => {
    module.on("attack", (e) => {
        const entity = e.entity;
        void entity;
        // @ts-expect-error attack payload is typed, not any
        e.thisPropertyDoesNotExist;
    });
    // The nested-event class (TitleEvent$Title) - was silently `any` before
    // the binary-name import fix.
    module.on("title", (e) => {
        // @ts-expect-error title payload is typed, not any
        e.thisPropertyDoesNotExist;
    });
    module.on("enable", () => {});
});

script.registerMode;

// localStorage is the Java ConcurrentHashMap facade, not DOM Storage.
localStorage.put("k", 1);
const n: number = localStorage.size();
void n;
// @ts-expect-error DOM Storage API must not exist here
localStorage.getItem("k");

// Class-value bindings: construct directly, statics ONLY via .static
// (verified in a live client - direct static access is undefined at runtime).
const q = RotationAxis.static.YP.rotationDegrees(90);
void q;
// Single-overload ctor: direct `new` carries the signature.
const v3 = new Vec3i(1, 2, 3);
void v3;
// Overloaded ctors: `.static` carries the FULL overload set.
const bp = new (BlockPos.static)(1, 2, 3);
void bp;
const clamped: number = MathHelper.static.clamp(5, 0, 3);
void clamped;
// @ts-expect-error statics are NOT directly on the binding (undefined at runtime)
Hand.MAIN_HAND;
// @ts-expect-error the handle has no instance rotation()
Axis.rotationDegrees(1);

// Hand alias exists (via .static); SilentHotbar is NOT a runtime global.
InteractionUtil.useItem(Hand.static.MAIN_HAND);
// @ts-expect-error SilentHotbar must not be an ambient global
SilentHotbar.INSTANCE;

// Typed Java.type via the opt-in registry (registry-lb in tsconfig types):
// fully inferred from the string literal - no generic, no import.
const shClass = Java.type("net.ccbluex.liquidbounce.utils.client.SilentHotbar");
const slot: number = shClass.INSTANCE.serversideSlot;
void slot;
// @ts-expect-error wrong member on a registry-typed handle must error (not any)
shClass.INSTANCE.notAMember;
// Unknown class names fall back to the generic any overload.
const unknownHandle = Java.type("com.example.NotARealClass");
void unknownHandle;

// Deep import by JVM path must resolve through typesVersions.
import type { AttackEntityEvent } from "@wunk/lb-script-api-types/types/net/ccbluex/liquidbounce/event/events/AttackEntityEvent";
declare const ev: AttackEntityEvent;
void ev.entity;
