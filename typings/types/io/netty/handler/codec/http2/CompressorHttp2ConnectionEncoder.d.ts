import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelFuture } from '../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { EmbeddedChannel } from '../../../../../io/netty/channel/embedded/EmbeddedChannel.d.ts'
import type { BrotliOptions } from '../../../../../io/netty/handler/codec/compression/BrotliOptions.d.ts'
import type { CompressionOptions } from '../../../../../io/netty/handler/codec/compression/CompressionOptions.d.ts'
import type { DeflateOptions } from '../../../../../io/netty/handler/codec/compression/DeflateOptions.d.ts'
import type { GzipOptions } from '../../../../../io/netty/handler/codec/compression/GzipOptions.d.ts'
import type { SnappyOptions } from '../../../../../io/netty/handler/codec/compression/SnappyOptions.d.ts'
import type { ZlibWrapper } from '../../../../../io/netty/handler/codec/compression/ZlibWrapper.d.ts'
import type { ZstdOptions } from '../../../../../io/netty/handler/codec/compression/ZstdOptions.d.ts'
import type { DecoratingHttp2ConnectionEncoder } from '../../../../../io/netty/handler/codec/http2/DecoratingHttp2ConnectionEncoder.d.ts'
import type { Http2Connection$PropertyKey } from '../../../../../io/netty/handler/codec/http2/Http2Connection$PropertyKey.d.ts'
import type { Http2ConnectionEncoder } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionEncoder.d.ts'
import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class CompressorHttp2ConnectionEncoder extends DecoratingHttp2ConnectionEncoder {
    static DEFAULT_COMPRESSION_LEVEL: number;
    static DEFAULT_MEM_LEVEL: number;
    static DEFAULT_WINDOW_BITS: number;
    constructor(arg0: Http2ConnectionEncoder)
    constructor(arg0: Http2ConnectionEncoder, ...arg1: CompressionOptions[])
    constructor(arg0: Http2ConnectionEncoder, arg1: number, arg2: number, arg3: number)
    // private brotliOptions: BrotliOptions;
    // private compressionLevel: number;
    // private deflateOptions: DeflateOptions;
    // private gzipCompressionOptions: GzipOptions;
    // private memLevel: number;
    // private propertyKey: Http2Connection$PropertyKey;
    // private snappyOptions: SnappyOptions;
    // private supportsCompressionOptions: boolean;
    // private windowBits: number;
    // private zstdOptions: ZstdOptions;
    // private bindCompressorToStream(arg0: EmbeddedChannel, arg1: number): void;
    cleanup(arg0: Http2Stream, arg1: EmbeddedChannel): void;
    getTargetContentEncoding(arg0: CharSequence): CharSequence;
    // private newCompressionChannel(arg0: ChannelHandlerContext, arg1: ZlibWrapper): EmbeddedChannel;
    // private newCompressor(arg0: ChannelHandlerContext, arg1: (Object | null)[], arg2: boolean): EmbeddedChannel;
    newContentCompressor(arg0: ChannelHandlerContext, arg1: CharSequence): EmbeddedChannel;
    writeData(arg0: ChannelHandlerContext, arg1: number, arg2: ByteBuf, arg3: number, arg4: boolean, arg5: ChannelPromise): ChannelFuture;
    writeHeaders(arg0: ChannelHandlerContext, arg1: number, arg2: (Object | null)[], arg3: number, arg4: boolean, arg5: ChannelPromise): ChannelFuture;
    writeHeaders(arg0: ChannelHandlerContext, arg1: number, arg2: (Object | null)[], arg3: number, arg4: number, arg5: boolean, arg6: number, arg7: boolean, arg8: ChannelPromise): ChannelFuture;
}