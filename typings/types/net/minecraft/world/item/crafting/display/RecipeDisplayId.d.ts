import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class RecipeDisplayId extends Record {
    static STREAM_CODEC: StreamCodec<ByteBuf, RecipeDisplayId>;
    constructor(index: number)
    // private index: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    index(): number;
    toString(): string;
}