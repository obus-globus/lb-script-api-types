import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToByteEncoder } from '../../../../../io/netty/handler/codec/MessageToByteEncoder.d.ts'
import type { BrotliOptions } from '../../../../../io/netty/handler/codec/compression/BrotliOptions.d.ts'
import type { CompressionOptions } from '../../../../../io/netty/handler/codec/compression/CompressionOptions.d.ts'
import type { DeflateOptions } from '../../../../../io/netty/handler/codec/compression/DeflateOptions.d.ts'
import type { GzipOptions } from '../../../../../io/netty/handler/codec/compression/GzipOptions.d.ts'
import type { SnappyOptions } from '../../../../../io/netty/handler/codec/compression/SnappyOptions.d.ts'
import type { ZlibWrapper } from '../../../../../io/netty/handler/codec/compression/ZlibWrapper.d.ts'
import type { ZstdOptions } from '../../../../../io/netty/handler/codec/compression/ZstdOptions.d.ts'
import type { HttpContentEncoder } from '../../../../../io/netty/handler/codec/http/HttpContentEncoder.d.ts'
import type { HttpContentEncoder$Result } from '../../../../../io/netty/handler/codec/http/HttpContentEncoder$Result.d.ts'
import type { HttpResponse } from '../../../../../io/netty/handler/codec/http/HttpResponse.d.ts'
export class HttpContentCompressor extends HttpContentEncoder {
    constructor()
    constructor(arg0: CompressionOptions[])
    constructor(arg0: number)
    constructor(arg0: number, arg1: CompressionOptions[])
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    // private brotliOptions: BrotliOptions;
    // private contentSizeThreshold: number;
    // private ctx: ChannelHandlerContext;
    // private deflateOptions: DeflateOptions;
    // private gzipOptions: GzipOptions;
    // private snappyOptions: SnappyOptions;
    // private zstdOptions: ZstdOptions;
    beginEncode(arg0: HttpResponse, arg1: string): HttpContentEncoder$Result;
    // private createEncoderFor(arg0: string): MessageToByteEncoder<ByteBuf>;
    determineEncoding(arg0: string): string;
    determineWrapper(arg0: string): ZlibWrapper;
    handlerAdded(arg0: ChannelHandlerContext): void;
}