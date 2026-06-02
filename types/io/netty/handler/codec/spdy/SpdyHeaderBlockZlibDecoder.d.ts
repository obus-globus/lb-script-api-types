import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { SpdyHeaderBlockRawDecoder } from '../../../../../io/netty/handler/codec/spdy/SpdyHeaderBlockRawDecoder.d.ts'
import type { SpdyHeadersFrame } from '../../../../../io/netty/handler/codec/spdy/SpdyHeadersFrame.d.ts'
import type { SpdyVersion } from '../../../../../io/netty/handler/codec/spdy/SpdyVersion.d.ts'
import type { Inflater } from '../../../../../java/util/zip/Inflater.d.ts'
export class SpdyHeaderBlockZlibDecoder extends SpdyHeaderBlockRawDecoder {
    constructor(arg0: SpdyVersion, arg1: number)
    // private decompressed: ByteBuf;
    // private decompressor: Inflater;
    decode(arg0: ByteBufAllocator, arg1: ByteBuf, arg2: SpdyHeadersFrame): void;
    // private decompress(arg0: ByteBufAllocator, arg1: SpdyHeadersFrame): number;
    end(): void;
    endHeaderBlock(arg0: SpdyHeadersFrame): void;
    // private ensureBuffer(arg0: ByteBufAllocator): void;
    // private releaseBuffer(): void;
    // private setInput(arg0: ByteBuf): number;
}