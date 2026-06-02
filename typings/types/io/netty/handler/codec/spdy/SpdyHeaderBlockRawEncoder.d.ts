import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { SpdyHeaderBlockEncoder } from '../../../../../io/netty/handler/codec/spdy/SpdyHeaderBlockEncoder.d.ts'
import type { SpdyHeadersFrame } from '../../../../../io/netty/handler/codec/spdy/SpdyHeadersFrame.d.ts'
import type { SpdyVersion } from '../../../../../io/netty/handler/codec/spdy/SpdyVersion.d.ts'
export class SpdyHeaderBlockRawEncoder extends SpdyHeaderBlockEncoder {
    constructor(arg0: SpdyVersion)
    // private version: number;
    encode(arg0: ByteBufAllocator, arg1: SpdyHeadersFrame): ByteBuf;
    end(): void;
}