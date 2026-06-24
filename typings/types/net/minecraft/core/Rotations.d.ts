import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class Rotations extends Record {
    static CODEC: Codec<Rotations>;
    static STREAM_CODEC: StreamCodec<ByteBuf, Rotations>;
    constructor(x: number, y: number, z: number)
    // private x: number;
    // private y: number;
    // private z: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    x(): number;
    y(): number;
    z(): number;
}