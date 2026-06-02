import type { UserConnection } from '../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ByteToMessageCodec } from '../../../../io/netty/handler/codec/ByteToMessageCodec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PreNettyLengthPrepender } from '../../../../net/raphimc/vialegacy/netty/PreNettyLengthPrepender.d.ts'
import type { PreNettyLengthRemover } from '../../../../net/raphimc/vialegacy/netty/PreNettyLengthRemover.d.ts'
export class PreNettyLengthCodec extends ByteToMessageCodec<ByteBuf> {
    static NAME: string;
    constructor(arg0: UserConnection)
    // private decoder: PreNettyLengthPrepender;
    // private encoder: PreNettyLengthRemover;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    encode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: ByteBuf): void;
}