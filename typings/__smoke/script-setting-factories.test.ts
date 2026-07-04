// Smoke test - verifies T-6: ScriptSetting factory parameters are typed
// objects with named keys (name, default, range, suffix, choices, ...)
// instead of opaque `org.graalvm.polyglot.Value`. Without this, autocomplete
// shows nothing and authors have to read Kotlin source to know what to pass.
//
// Two-sided: positive uses compile; negative cases (missing required key,
// wrong type) are rejected.

/// <reference path="../ambient/ambient.d.ts" />

import type { ScriptSetting } from '../types/net/ccbluex/liquidbounce/script/bindings/features/ScriptSetting.d.ts';

declare const setting: ScriptSetting;

// --- Positive ---

const _b = setting.boolean({ name: "enabled", default: true });
void _b;

const _i = setting.int({ name: "delay", default: 50, range: [0, 200], suffix: "ms" });
void _i;

const _ir = setting.intRange({ name: "delayRange", default: [50, 100], range: [0, 200] });
void _ir;

const _f = setting.float({ name: "speed", default: 1.5, range: [0, 10] });
void _f;

const _fr = setting.floatRange({ name: "speedRange", default: [1, 2], range: [0, 10], suffix: "x" });
void _fr;

const _k = setting.key({ name: "bindKey", default: "key.keyboard.r" });
void _k;

const _t = setting.text({ name: "label", default: "" });
void _t;

const _ta = setting.textArray({ name: "blacklist", default: ["alice", "bob"] });
void _ta;

const _c = setting.choose({ name: "mode", choices: ["fast", "slow"] as const, default: "fast" });
void _c;

const _mc = setting.multiChoose({
    name: "filters",
    choices: ["spam", "ad", "url"] as const,
    default: ["spam"],
    canBeNone: false,
});
void _mc;

// --- Negative ---

// Missing required `range`.
// @ts-expect-error TS2345 - range is required
setting.int({ name: "x", default: 0 });

// Wrong default type (boolean -> number expected).
// @ts-expect-error TS2322 - boolean is not number
setting.int({ name: "x", default: true, range: [0, 1] });

// Choose: default is not one of the choices (literal narrowing rejects it).
// @ts-expect-error TS2322 - "missing" is not in choices union
setting.choose({ name: "mode", choices: ["a", "b"] as const, default: "missing" });

// multiChoose default is an array of strings, but only choice members are allowed.
// @ts-expect-error TS2322 - "c" is not in choices
setting.multiChoose({ name: "f", choices: ["a", "b"] as const, default: ["c"] });
