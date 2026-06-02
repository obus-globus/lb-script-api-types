import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToByteEncoder } from '../../../../../../io/netty/handler/codec/MessageToByteEncoder.d.ts'
import type { Socks5AddressEncoder } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5AddressEncoder.d.ts'
import type { Socks5CommandResponse } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5CommandResponse.d.ts'
import type { Socks5Message } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5Message.d.ts'
export class Socks5ServerEncoder extends MessageToByteEncoder<Socks5Message> {
    static DEFAULT: Socks5ServerEncoder;
    constructor()
    constructor(arg0: Socks5AddressEncoder)
    // private addressEncoder: Socks5AddressEncoder;
    addressEncoder(): Socks5AddressEncoder;
    encode(arg0: ChannelHandlerContext, arg1: Socks5Message, arg2: ByteBuf): void;
    // private encodeCommandResponse(arg0: Socks5CommandResponse, arg1: ByteBuf): void;
}