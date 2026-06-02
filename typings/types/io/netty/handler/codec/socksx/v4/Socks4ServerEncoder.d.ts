import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToByteEncoder } from '../../../../../../io/netty/handler/codec/MessageToByteEncoder.d.ts'
import type { Socks4CommandResponse } from '../../../../../../io/netty/handler/codec/socksx/v4/Socks4CommandResponse.d.ts'
export class Socks4ServerEncoder extends MessageToByteEncoder<Socks4CommandResponse> {
    static INSTANCE: Socks4ServerEncoder;
    private constructor()
    encode(arg0: ChannelHandlerContext, arg1: Socks4CommandResponse, arg2: ByteBuf): void;
}