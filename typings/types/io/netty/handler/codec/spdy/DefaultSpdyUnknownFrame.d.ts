import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { DefaultByteBufHolder } from '../../../../../io/netty/buffer/DefaultByteBufHolder.d.ts'
import type { SpdyUnknownFrame } from '../../../../../io/netty/handler/codec/spdy/SpdyUnknownFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultSpdyUnknownFrame extends DefaultByteBufHolder implements SpdyUnknownFrame {
    constructor(arg0: number, arg1: number, arg2: ByteBuf)
    // private flags: number;
    // private frameType: number;
    copy(): DefaultSpdyUnknownFrame;
    duplicate(): DefaultSpdyUnknownFrame;
    equals(arg0: Object | null): boolean;
    flags(): number;
    frameType(): number;
    hashCode(): number;
    replace(arg0: ByteBuf): DefaultSpdyUnknownFrame;
    retain(): DefaultSpdyUnknownFrame;
    retain(arg0: number): DefaultSpdyUnknownFrame;
    retainedDuplicate(): DefaultSpdyUnknownFrame;
    toString(): string;
    touch(): DefaultSpdyUnknownFrame;
    touch(arg0: Object): DefaultSpdyUnknownFrame;
}