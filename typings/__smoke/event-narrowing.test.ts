// Phase 5.2 smoke test - verifies the augmentation cascade actually
// produces a real type for `event` inside a `ScriptModule.on(...)` handler.
//
// Two-sided assertion: if the void.d.ts cascade
// were still active (or the augmentation barrel weren't being picked up),
// `event` would collapse to `any` and the @ts-expect-error below would
// no longer consume an error - that is the cascade-broken signal.

import type {} from '../augmentations/index.d.ts';
import type { ScriptModule } from '../types/net/ccbluex/liquidbounce/script/bindings/features/ScriptModule.d.ts';
import type { AttackEntityEvent } from '../types/net/ccbluex/liquidbounce/event/events/AttackEntityEvent.d.ts';
import type { Entity } from '../types/net/minecraft/world/entity/Entity.d.ts';

// Minimal compile-time type asserter. Avoids pulling in `tsd`/`expect-type`
// as a workspace dep - equivalent guarantee, zero footprint.
type Equals<A, B> =
    (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2)
        ? true
        : false;
declare function expectType<TExpected>(value: TExpected): void;
declare function assertExactly<T extends true>(): void;

declare const mc: ScriptModule;

mc.on('attack', (event) => {
    // Positive #1: the overload picks AttackEntityEvent (not `any`).
    assertExactly<Equals<typeof event, AttackEntityEvent>>();

    // Positive #2: chain past the overload pick into a real field - `event.entity`
    // resolves to net.minecraft.world.entity.Entity.
    assertExactly<Equals<typeof event.entity, Entity>>();

    // Positive #3: a deep method on the chained type narrows correctly.
    // Entity.getX() emits as `getX(): number` - must remain `number`.
    expectType<number>(event.entity.getX());
    expectType<boolean>(event.entity.isAlive());

    // Negative #1: assigning a wrong primitive type from the chain MUST
    // be a real compile error. If the cascade collapsed `event` to `any`,
    // `event.entity.getX()` would be `any`, this assignment would type-check,
    // and `@ts-expect-error` would itself become an unused-suppression error.
    // @ts-expect-error - getX() returns number, not string
    const s: string = event.entity.getX();
    void s;

    // Negative #2: a non-existent field must error. Same cascade signal -
    // if `event.entity` were `any`, this property access would silently
    // succeed and the directive would be flagged as unused.
    // @ts-expect-error - Entity has no `nonexistentFieldXyz` member
    const x = event.entity.nonexistentFieldXyz;
    void x;
});

// Negative #3 (T-10 / Issue #7): unknown event names MUST be rejected.
// Before T-10, ScriptModule.d.ts shipped a generic
//   on(eventName: string, handler: Value): void;
// alongside the 122 narrowed overloads from the augmentation. TS overload
// resolution iterates all signatures and picks the first match - the
// generic accepted ANY string, so `mod.on("attck", ...)` typo'd silently.
// T-10 strips the generic overload; only the augmentation's literal-name
// overloads remain. If this @ts-expect-error stops consuming an error,
// the generic overload has crept back in (regression).
// @ts-expect-error - "definitely_not_a_real_event_xyz" is not a known event name
mc.on('definitely_not_a_real_event_xyz', () => {});

// Negative #4 (T-10 regression detector): same bogus name, but with an
// `any`-typed handler. Negative #3 alone cannot detect the generic overload
// creeping back: its inline arrow is not assignable to graalvm `Value`, so
// that call errors (and the directive is consumed) with or without the
// generic overload present. An `any` handler IS assignable to `Value` -
// this call compiles if and only if a generic on(string, Value) overload
// exists, which is exactly the regression T-10 must prevent. (This gap was
// real: the strip regex missed the `Value_2` import alias, the overload
// shipped, and this suite stayed green.)
declare const anyHandler: any;
// @ts-expect-error - only literal event names may resolve; if this stops
// erroring, the generic on(eventName: string, ...) overload is back
mc.on('definitely_not_a_real_event_xyz', anyHandler);
