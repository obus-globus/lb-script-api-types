import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ByteToMessageDecoder } from '../../../../../../io/netty/handler/codec/ByteToMessageDecoder.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { Socks5PrivateAuthResponseDecoder$State } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5PrivateAuthResponseDecoder$State.d.ts'
import type { Exception } from '../../../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Socks5PrivateAuthResponseDecoder extends ByteToMessageDecoder {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor()
    // private state: Socks5PrivateAuthResponseDecoder$State;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    // private fail(arg0: Object[], arg1: Exception): void;
}