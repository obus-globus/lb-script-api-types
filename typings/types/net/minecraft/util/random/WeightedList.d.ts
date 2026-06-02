import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { Weighted } from '../../../../net/minecraft/util/random/Weighted.d.ts'
import type { WeightedList$Builder } from '../../../../net/minecraft/util/random/WeightedList$Builder.d.ts'
import type { WeightedList$Selector } from '../../../../net/minecraft/util/random/WeightedList$Selector.d.ts'
export class WeightedList<E extends Object | number | string | boolean> extends Object {
    static builder(): WeightedList$Builder<Object>;
    static codec(paramelementCodec: Codec<Object>): Codec<Object>;
    static codec(paramelementCodec: MapCodec<Object>): Codec<Object>;
    static nonEmptyCodec(paramelementCodec: Codec<Object>): Codec<Object>;
    static nonEmptyCodec(paramelementCodec: MapCodec<Object>): Codec<Object>;
    static of(): WeightedList<Object>;
    static of(paramvalue: Object | null): WeightedList<Object>;
    static of(paramitems: (Object | null)[]): WeightedList<Object>;
    static of(paramitems: Object | null): WeightedList<Object>;
    static streamCodec(paramelementCodec: StreamCodec<Object, Object>): StreamCodec<Object, Object>;
    private constructor(items: Weighted<E>[])
    // private items: Weighted<E>[];
    // private selector: WeightedList$Selector<E>;
    // private totalWeight: number;
    contains(value: E): boolean;
    equals(obj: Object | null): boolean;
    getRandom(random: RandomSource): Optional<E>;
    getRandomOrThrow(random: RandomSource): E;
    hashCode(): number;
    isEmpty(): boolean;
    map(mapper: (param0: E) => T): WeightedList<T>;
    unwrap(): Weighted<E>[];
}