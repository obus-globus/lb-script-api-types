import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { Weighted } from '../../../../net/minecraft/util/random/Weighted.d.ts'
import type { WeightedList$Builder } from '../../../../net/minecraft/util/random/WeightedList$Builder.d.ts'
import type { WeightedList$Selector } from '../../../../net/minecraft/util/random/WeightedList$Selector.d.ts'
export class WeightedList<E extends unknown> extends Object {
    static builder<E extends unknown>(): WeightedList$Builder<E>;
    static codec<E extends unknown>(paramelementCodec: Codec<E>): Codec<WeightedList<E>>;
    static codec<E extends unknown>(paramelementCodec: MapCodec<E>): Codec<WeightedList<E>>;
    static nonEmptyCodec<E extends unknown>(paramelementCodec: Codec<E>): Codec<WeightedList<E>>;
    static nonEmptyCodec<E extends unknown>(paramelementCodec: MapCodec<E>): Codec<WeightedList<E>>;
    static of<E extends unknown>(): WeightedList<E>;
    static of<E extends unknown>(paramvalue: E): WeightedList<E>;
    static of<E extends unknown>(...paramitems: E[]): WeightedList<E>;
    static of<E extends unknown>(paramitems: Weighted<E>[]): WeightedList<E>;
    static of<E extends unknown>(...paramitems: Weighted<E>[]): WeightedList<E>;
    static streamCodec<E extends unknown, B extends ByteBuf>(paramelementCodec: StreamCodec<B, E>): StreamCodec<B, WeightedList<E>>;
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
    map<T extends unknown>(mapper: (param0: E) => T): WeightedList<T>;
    unwrap(): Weighted<E>[];
}