import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToByteEncoder } from '../../../../../../io/netty/handler/codec/MessageToByteEncoder.d.ts'
import type { Socks4CommandRequest } from '../../../../../../io/netty/handler/codec/socksx/v4/Socks4CommandRequest.d.ts'
export class Socks4ClientEncoder extends MessageToByteEncoder<Socks4CommandRequest> {
    static INSTANCE: Socks4ClientEncoder;
    private constructor()
    encode(arg0: ChannelHandlerContext, arg1: Socks4CommandRequest, arg2: ByteBuf): void;
}