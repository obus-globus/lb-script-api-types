import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class Enchantable extends Record {
    static CODEC: Codec<Enchantable>;
    static STREAM_CODEC: StreamCodec<ByteBuf, Enchantable>;
    constructor(value: number)
    // private value: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    value(): number;
}