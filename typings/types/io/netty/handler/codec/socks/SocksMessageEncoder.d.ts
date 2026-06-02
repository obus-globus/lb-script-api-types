import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToByteEncoder } from '../../../../../io/netty/handler/codec/MessageToByteEncoder.d.ts'
import type { SocksMessage } from '../../../../../io/netty/handler/codec/socks/SocksMessage.d.ts'
export class SocksMessageEncoder extends MessageToByteEncoder<SocksMessage> {
    constructor()
    encode(arg0: ChannelHandlerContext, arg1: SocksMessage, arg2: ByteBuf): void;
}