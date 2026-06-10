import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class Weighted<T extends Object | number | string | boolean> extends Record {
    static codec(paramelementCodec: Codec<Object>): Codec<Weighted<Object>>;
    static codec(paramelementCodec: MapCodec<Object>): Codec<Weighted<Object>>;
    static streamCodec(paramvalueCodec: StreamCodec<ByteBuf, Object>): StreamCodec<ByteBuf, Weighted<Object>>;
    // private value: T;
    // private weight: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    map<U extends Object | number | string | boolean>(function_: (param0: T) => U): Weighted<U>;
    toString(): string;
    value(): T;
    weight(): number;
}