import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { EmbeddedChannel } from '../../../../../io/netty/channel/embedded/EmbeddedChannel.d.ts'
import type { Http2Connection } from '../../../../../io/netty/handler/codec/http2/Http2Connection.d.ts'
import type { Http2FrameListener } from '../../../../../io/netty/handler/codec/http2/Http2FrameListener.d.ts'
import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DelegatingDecompressorFrameListener$Http2Decompressor extends Object {
    constructor(arg0: EmbeddedChannel, arg1: Http2Connection, arg2: Http2FrameListener)
    // private compressed: number;
    // private dataDecompressed: boolean;
    // private decompressed: number;
    // private decompressor: EmbeddedChannel;
    // private padding: number;
    // private stream: Http2Stream;
    // private targetCtx: ChannelHandlerContext;
    cleanup(): void;
    consumeBytes(arg0: number, arg1: number): number;
    decompress(arg0: ChannelHandlerContext, arg1: Http2Stream, arg2: ByteBuf, arg3: number, arg4: boolean): number;
    // private incrementCompressedBytes(arg0: number): void;
    // private incrementDecompressedBytes(arg0: number): void;
}