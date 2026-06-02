import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { ReplayingDecoder } from '../../../../../../io/netty/handler/codec/ReplayingDecoder.d.ts'
import type { Socks5AddressDecoder } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5AddressDecoder.d.ts'
import type { Socks5CommandResponseDecoder$State } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5CommandResponseDecoder$State.d.ts'
import type { Exception } from '../../../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Socks5CommandResponseDecoder extends ReplayingDecoder<Socks5CommandResponseDecoder$State> {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor()
    constructor(arg0: Socks5AddressDecoder)
    // private addressDecoder: Socks5AddressDecoder;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    // private fail(arg0: Object[], arg1: Exception): void;
}