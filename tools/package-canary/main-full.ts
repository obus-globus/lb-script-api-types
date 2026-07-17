// Packaging canary, pass 2 - compiled against the PACKED package with the
// FULL-typing entry (`types: ["@wunk/lb-script-api-types/ambient-full"]`).
// Covers the two published entry points pass 1 can't see (A18):
//
//   - ambient-full.d.ts: a shim of two `/// <reference>` lines. A broken
//     reference path errors here (TS6053) - previously it was parsed by
//     nothing and could ship broken silently.
//   - registry-full/index.d.ts: the ~51k-entry Java.type registry, now
//     type-checked as a real consumer entry. Its whole `typeof import(...)`
//     module graph joins the program, so a syntax-corrupt shipped .d.ts
//     anywhere in types/** also fails this pass (syntactic diagnostics are
//     reported even under skipLibCheck).
//
// Probes below use classes present ONLY in registry-full (absent from the
// registry-lb entry pass 1 compiles), so they prove the full registry is the
// one resolving. Same convention as pass 1: positive probes must compile,
// negative probes use @ts-expect-error - if an entry silently degrades to
// `any` (e.g. its types/** target file fell out of the files glob), the
// directive turns unused (TS2578) and the canary fails.
//
// NOTE: registry-typed Java.type handles are the class types themselves -
// statics sit directly on the handle (no `.static` indirection; that
// convention is for the ambient class-value bindings probed in pass 1).

// Ambient half of ambient-full: globals must be wired through the shim too.
const script = registerScript({ name: "canary-full", version: "1.0.0", authors: ["ci"] });
script.registerModule({ name: "m", category: "Combat", description: "d" }, (module) => {
    module.on("enable", () => {});
});

// Registry-full-only entries, typed straight from the string literal.
// (Locals are *Class-suffixed: `Mth` itself is already an ambient global
// class-value binding, and shadowing an ambient `const` is TS2451.)
const MthClass = Java.type("net.minecraft.util.Mth");
const clamped: number = MthClass.clamp(5, 0, 3);
void clamped;
// @ts-expect-error registry-full-typed handle must error on a wrong member (not any)
MthClass.thisMemberDoesNotExist;

const ImmutableListClass = Java.type("com.google.common.collect.ImmutableList");
const builder = ImmutableListClass.builder<number>();
void builder;

const TypesClass = Java.type("com.viaversion.viaversion.api.type.Types");
void TypesClass.BLOCK_CHANGE;

// Unknown class names still fall back to the generic any overload.
const unknownHandle = Java.type("com.example.NotARealClass");
void unknownHandle;
