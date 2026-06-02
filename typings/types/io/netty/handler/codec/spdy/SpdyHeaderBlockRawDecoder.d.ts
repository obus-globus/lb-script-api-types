import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { SpdyHeaderBlockDecoder } from '../../../../../io/netty/handler/codec/spdy/SpdyHeaderBlockDecoder.d.ts'
import type { SpdyHeaderBlockRawDecoder$State } from '../../../../../io/netty/handler/codec/spdy/SpdyHeaderBlockRawDecoder$State.d.ts'
import type { SpdyHeadersFrame } from '../../../../../io/netty/handler/codec/spdy/SpdyHeadersFrame.d.ts'
import type { SpdyVersion } from '../../../../../io/netty/handler/codec/spdy/SpdyVersion.d.ts'
export class SpdyHeaderBlockRawDecoder extends SpdyHeaderBlockDecoder {
    constructor(arg0: SpdyVersion, arg1: number)
    // private cumulation: ByteBuf;
    // private headerSize: number;
    // private length: number;
    // private maxHeaderSize: number;
    // private name: string;
    // private numHeaders: number;
    // private state: SpdyHeaderBlockRawDecoder$State;
    decode(arg0: ByteBufAllocator, arg1: ByteBuf, arg2: SpdyHeadersFrame): void;
    decodeHeaderBlock(arg0: ByteBuf, arg1: SpdyHeadersFrame): void;
    end(): void;
    endHeaderBlock(arg0: SpdyHeadersFrame): void;
    // private releaseBuffer(): void;
}