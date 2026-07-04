// Smoke test - verifies T-4: GraalVM JS host intrinsics are typed in the
// ambient declarations so authors get autocomplete and typechecking for
// `Java.type(...)`, `Polyglot.import/export`, `print`, `printErr`,
// `load`, `Graal.*`, etc.
//
// These globals are exposed to every polyglot script by the GraalVM Truffle
// host but are NOT enumerable via `Object.entries(globalThis)`, so the
// auto-detect pass in ts-defgen.js never sees them - they must be declared
// manually (post-patches.sh T-4 block).
//
// Negative cases assert that the declared shapes still reject mis-uses.

/// <reference path="../ambient/ambient.d.ts" />

// Java.type - generic FQN resolver. Default returns `any` so it stays
// flexible for ad-hoc use, but the type parameter lets you narrow it.
const ItemStackType = Java.type("net.minecraft.item.ItemStack");
const NarrowType = Java.type<{ new (...args: any[]): { count: number } }>(
    "net.minecraft.item.ItemStack",
);
void ItemStackType;
const _narrowInstance = new NarrowType();
const _count: number = _narrowInstance.count;
void _count;

// Java.from / Java.to - array conversions.
const jsArr: number[] = Java.from<number>(/* fake java array */ {} as any);
void jsArr;
const javaArr = Java.to([1, 2, 3], "int[]");
void javaArr;

// Java.extend / Java.super / Java.synchronized - advanced reflection.
const Extended: any = Java.extend(Java.type("java.lang.Runnable"));
void Extended;
const r = Java.synchronized(() => 1, {});
const _r: number = r;
void _r;

// Java type predicates - boolean returns.
const _b1: boolean = Java.isJavaObject({});
const _b2: boolean = Java.isType(ItemStackType);
void _b1; void _b2;

// Polyglot bindings - generic import/export.
Polyglot.export("counter", 42);
Polyglot.export<{ a: number }>("config", { a: 1 });
const importedAny = Polyglot.import("counter");
void importedAny;
const importedTyped: string = Polyglot.import<string>("greeting");
void importedTyped;
const evaled: number = Polyglot.eval<number>("js", "1 + 2");
void evaled;

// Top-level print / printErr - variadic, void return.
print("hello", 1, true, { foo: "bar" });
printErr("error", new Error("boom"));

// load / loadWithNewGlobal - accept string OR { name; script }.
load("script.js");
load({ name: "inline", script: "var x = 1" });
loadWithNewGlobal({ name: "inline", script: "x" }, "arg1", 2);

// Graal metadata - all readonly strings/booleans.
const _lang: string = Graal.language;
const _isGraal: boolean = Graal.isGraalRuntime;
void _lang; void _isGraal;

// --- Negative cases ---

// Polyglot.export requires a value parameter.
// @ts-expect-error TS2554 - missing value argument
Polyglot.export("only-name");

// print() accepts unknowns; `void` from print() cannot be assigned to number.
// @ts-expect-error TS2322 - print returns void
const _badPrint: number = print("x");
void _badPrint;

// Graal.language is a string, not a number.
// @ts-expect-error TS2322 - string is not assignable to number
const _badLang: number = Graal.language;
void _badLang;
