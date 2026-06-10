import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { WorldClock } from '../../../../../../../net/minecraft/world/clock/WorldClock.d.ts'
import type { IntRange } from '../../../../../../../net/minecraft/world/level/storage/loot/IntRange.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ValidationContext } from '../../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { TimeCheck$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/TimeCheck$Builder.d.ts'
export class TimeCheck extends Record implements LootItemCondition {
    static CODEC: Codec<Holder<LootItemCondition>>;
    static DIRECT_CODEC: Codec<LootItemCondition>;
    static MAP_CODEC: MapCodec<TimeCheck>;
    static TYPED_CODEC: Codec<LootItemCondition>;
    static time(paramclock: Holder<WorldClock>, paramvalue: IntRange): TimeCheck$Builder;
    constructor(clock: Holder<WorldClock>, period: Optional<number>, value: IntRange)
    // private clock: Holder<WorldClock>;
    // private period: Optional<number>;
    // private value: IntRange;
    clock(): Holder<WorldClock>;
    codec(): MapCodec<TimeCheck>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    period(): Optional<number>;
    test(context: LootContext): boolean;
    toString(): string;
    validate(context: ValidationContext): void;
    value(): IntRange;
}