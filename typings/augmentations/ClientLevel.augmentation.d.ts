// ClientLevel augmentation — re-expose getEntities overloads.
//
// Problem: `mc.level` is typed as `ClientLevel` (a subclass of `Level`).
// `ClientLevel` declares its own `getEntities(): LevelEntityGetter<Entity>`
// which shadows the four other overloads from the parent `Level` —
// in particular the script-author-friendly form
//   `getEntities(except, AABB, selector)`
// which TS rejects on `mc.level` even though it works at runtime.
//
// Fix: declaration-merge an interface onto `ClientLevel` that adds back
// the missing overloads. TS will accept calls in any of these shapes
// without losing the existing 0-arg method.
//
// Generic-type-parameter overloads are intentionally widened to `Entity`
// here (instead of `<T>`) because TS can't infer T across an augmented
// interface signature cleanly; script authors who need that level of
// detail can fall back to a type assertion.
//
// `except` accepts `Entity | LocalPlayer | null` rather than just
// `Entity | null` because LocalPlayer redeclares one of Entity's
// overloaded methods (`onSyncedDataUpdated`) with fewer overloads,
// making LocalPlayer structurally non-assignable to Entity (TS
// overload variance is invariant on parameter list). The
// `mc.level.getEntities(mc.player, …)` call is by far the most common
// script pattern, so the union is worth its weight. See audit W19.

import type { Entity } from '../types/net/minecraft/world/entity/Entity.d.ts';
import type { EntityTypeTest } from '../types/net/minecraft/world/level/entity/EntityTypeTest.d.ts';
import type { AABB } from '../types/net/minecraft/world/phys/AABB.d.ts';
import type { LocalPlayer } from '../types/net/minecraft/client/player/LocalPlayer.d.ts';

declare module '../types/net/minecraft/client/multiplayer/ClientLevel' {
    interface ClientLevel {
        getEntities(except: Entity | LocalPlayer | null, bb: AABB, selector: (param0: Entity) => boolean): Entity[];
        getEntities(type: EntityTypeTest<Entity, Entity>, bb: AABB, selector: (param0: Entity) => boolean): Entity[];
        getEntities(type: EntityTypeTest<Entity, Entity>, bb: AABB, selector: (param0: Entity) => boolean, output: Entity[]): void;
        getEntities(type: EntityTypeTest<Entity, Entity>, bb: AABB, selector: (param0: Entity) => boolean, output: Entity[], maxResults: number): void;
    }
}
