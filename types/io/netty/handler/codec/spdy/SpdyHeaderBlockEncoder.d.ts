import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { SpdyHeadersFrame } from '../../../../../io/netty/handler/codec/spdy/SpdyHeadersFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class SpdyHeaderBlockEncoder extends Object {
    constructor()
    encode(arg0: ByteBufAllocator, arg1: SpdyHeadersFrame): ByteBuf;
    end(): void;
}