import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { BlockPos } from '../../../net/minecraft/core/BlockPos.d.ts'
import type { StreamCodec } from '../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class BlockBox {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static STREAM_CODEC: StreamCodec<ByteBuf, BlockPos[]>;
    static of(parampos: BlockPos): BlockPos[];
    static of(parama: BlockPos, paramb: BlockPos): BlockPos[];
}