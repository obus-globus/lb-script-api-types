import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MinMaxBounds$Ints } from '../../../../net/minecraft/advancements/criterion/MinMaxBounds$Ints.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { Stat } from '../../../../net/minecraft/stats/Stat.d.ts'
import type { StatsCounter } from '../../../../net/minecraft/stats/StatsCounter.d.ts'
export class PlayerPredicate$StatMatcher<T extends Object | number | string | boolean> extends Record {
    static CODEC: Codec<PlayerPredicate$StatMatcher<Object>>;
    constructor(type: Stat<T>[], value: Holder<T>, range: MinMaxBounds$Ints)
    private constructor(type: Stat<T>[], value: Holder<T>, range: MinMaxBounds$Ints, stat: () => Stat<T>)
    // private range: MinMaxBounds$Ints;
    // private stat: () => Stat<T>;
    // private type: Stat<T>[];
    // private value: Holder<T>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(counter: StatsCounter): boolean;
    range(): MinMaxBounds$Ints;
    stat(): () => Stat<T>;
    toString(): string;
    type(): Stat<T>[];
    value(): Holder<T>;
}