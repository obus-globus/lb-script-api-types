import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class BlocksAttacks$ItemDamageFunction extends Record {
    static CODEC: Codec<BlocksAttacks$ItemDamageFunction>;
    static DEFAULT: BlocksAttacks$ItemDamageFunction;
    static STREAM_CODEC: StreamCodec<ByteBuf, BlocksAttacks$ItemDamageFunction>;
    constructor(threshold: number, base: number, factor: number)
    // private base: number;
    // private factor: number;
    // private threshold: number;
    apply(dealtDamage: number): number;
    base(): number;
    equals(o: Object | null): boolean;
    factor(): number;
    hashCode(): number;
    threshold(): number;
    toString(): string;
}