import type { UserConnection } from '../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToByteEncoder } from '../../../../io/netty/handler/codec/MessageToByteEncoder.d.ts'
export class PreNettyLengthRemover extends MessageToByteEncoder<ByteBuf> {
    static NAME: string;
    constructor(arg0: UserConnection)
    // private user: UserConnection;
    encode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: ByteBuf): void;
}