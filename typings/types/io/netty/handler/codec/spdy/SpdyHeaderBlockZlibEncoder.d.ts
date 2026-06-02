import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { SpdyHeaderBlockRawEncoder } from '../../../../../io/netty/handler/codec/spdy/SpdyHeaderBlockRawEncoder.d.ts'
import type { SpdyHeadersFrame } from '../../../../../io/netty/handler/codec/spdy/SpdyHeadersFrame.d.ts'
import type { SpdyVersion } from '../../../../../io/netty/handler/codec/spdy/SpdyVersion.d.ts'
import type { Deflater } from '../../../../../java/util/zip/Deflater.d.ts'
export class SpdyHeaderBlockZlibEncoder extends SpdyHeaderBlockRawEncoder {
    constructor(arg0: SpdyVersion, arg1: number)
    // private compressor: Deflater;
    // private finished: boolean;
    // private compressInto(arg0: ByteBuf): boolean;
    encode(arg0: ByteBufAllocator, arg1: SpdyHeadersFrame): ByteBuf;
    // private encode(arg0: ByteBufAllocator, arg1: number): ByteBuf;
    end(): void;
    // private setInput(arg0: ByteBuf): number;
}