import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class Weighted<T extends unknown> extends Record {
    static codec<E extends unknown>(paramelementCodec: Codec<E>): Codec<Weighted<E>>;
    static codec<E extends unknown>(paramelementCodec: MapCodec<E>): Codec<Weighted<E>>;
    static streamCodec<B extends ByteBuf, T extends unknown>(paramvalueCodec: StreamCodec<B, T>): StreamCodec<B, Weighted<T>>;
    constructor(value: T, weight: number)
    // private value: T;
    // private weight: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    map<U extends unknown>(function_: (param0: T) => U): Weighted<U>;
    toString(): string;
    value(): T;
    weight(): number;
}