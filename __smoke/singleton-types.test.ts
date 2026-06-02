// Phase 5.3.2 smoke test — verifies that Kotlin `object` singletons that
// implement Collection (ModuleManager, CommandManager) are no longer
// collapsed to `(Object | null)[]` in the generated ScriptClient type.
//
// Two-sided assertion: the positive side checks that the real API methods
// (.getModuleByName, .execute) compile successfully, which would fail with
// TS2339 if the type were still an array. The negative side checks that
// array-only properties (.length) cause a TS2339 error that IS consumed by
// the expect-error directive below — if we regress to the array type, the
// directive would become unused (TS2578), surfacing as a failure.

import type {} from '../augmentations/index.d.ts';
import type { ScriptClient } from '../types/net/ccbluex/liquidbounce/script/bindings/api/ScriptClient.d.ts';
import type { ClientModule } from '../types/net/ccbluex/liquidbounce/features/module/ClientModule.d.ts';

declare const client: ScriptClient;

// ── ModuleManager ──────────────────────────────────────────────────────────

// Positive #1: .getModuleByName() exists and returns ClientModule | null.
// If moduleManager were still (Object | null)[], this would TS2339.
const maybeModule: ClientModule | null = client.moduleManager.getModuleByName("KillAura");

// Positive #2: .getCategories() exists and returns string[].
const cats: string[] = client.moduleManager.getCategories();

// Negative: arrays have .length; ModuleManager does not (it has .size).
// @ts-expect-error TS2339 — `length` is not on ModuleManager; regression
// would surface as TS2578 (unused @ts-expect-error).
const _mmLen = client.moduleManager.length;

// ── CommandManager ─────────────────────────────────────────────────────────

// Positive #3: .execute() exists on CommandManager.
// If commandManager were still (Object | null)[], this would TS2339.
client.commandManager.execute(".killaura");

// Negative: same array regression guard.
// @ts-expect-error TS2339 — `length` is not on CommandManager.
const _cmLen = client.commandManager.length;
