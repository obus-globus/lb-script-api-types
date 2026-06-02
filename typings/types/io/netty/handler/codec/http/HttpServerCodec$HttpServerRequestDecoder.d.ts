import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { HttpDecoderConfig } from '../../../../../io/netty/handler/codec/http/HttpDecoderConfig.d.ts'
import type { HttpRequestDecoder } from '../../../../../io/netty/handler/codec/http/HttpRequestDecoder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HttpServerCodec$HttpServerRequestDecoder extends HttpRequestDecoder {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static DEFAULT_ALLOW_DUPLICATE_CONTENT_LENGTHS: boolean;
    static DEFAULT_ALLOW_PARTIAL_CHUNKS: boolean;
    static DEFAULT_CHUNKED_SUPPORTED: boolean;
    static DEFAULT_INITIAL_BUFFER_SIZE: number;
    static DEFAULT_MAX_CHUNK_SIZE: number;
    static DEFAULT_MAX_HEADER_SIZE: number;
    static DEFAULT_MAX_INITIAL_LINE_LENGTH: number;
    static DEFAULT_STRICT_LINE_PARSING: boolean;
    static DEFAULT_VALIDATE_HEADERS: boolean;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor(null_: HttpServerCodec$HttpServerRequestDecoder, arg1: HttpDecoderConfig)
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
}