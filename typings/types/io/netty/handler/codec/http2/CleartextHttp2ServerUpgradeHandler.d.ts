import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandler } from '../../../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ByteToMessageDecoder } from '../../../../../io/netty/handler/codec/ByteToMessageDecoder.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { HttpServerCodec } from '../../../../../io/netty/handler/codec/http/HttpServerCodec.d.ts'
import type { HttpServerUpgradeHandler } from '../../../../../io/netty/handler/codec/http/HttpServerUpgradeHandler.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CleartextHttp2ServerUpgradeHandler extends ByteToMessageDecoder {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor(arg0: HttpServerCodec, arg1: HttpServerUpgradeHandler, arg2: ChannelHandler)
    // private http2ServerHandler: ChannelHandler;
    // private httpServerCodec: HttpServerCodec;
    // private httpServerUpgradeHandler: HttpServerUpgradeHandler;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    handlerAdded(arg0: ChannelHandlerContext): void;
}