import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandler } from '../../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ByteToMessageDecoder } from '../../../../io/netty/handler/codec/ByteToMessageDecoder.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { SslContext } from '../../../../io/netty/handler/ssl/SslContext.d.ts'
import type { SslHandler } from '../../../../io/netty/handler/ssl/SslHandler.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OptionalSslHandler extends ByteToMessageDecoder {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor(arg0: SslContext)
    // private sslContext: SslContext;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    // private handleNonSsl(arg0: ChannelHandlerContext): void;
    // private handleSsl(arg0: ChannelHandlerContext): void;
    newNonSslHandler(arg0: ChannelHandlerContext): ChannelHandler;
    newNonSslHandlerName(): string;
    newSslHandler(arg0: ChannelHandlerContext, arg1: SslContext): SslHandler;
    newSslHandlerName(): string;
}