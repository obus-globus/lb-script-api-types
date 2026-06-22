import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufHolder } from '../../../../../io/netty/buffer/ByteBufHolder.d.ts'
import type { SpdyFrame } from '../../../../../io/netty/handler/codec/spdy/SpdyFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface SpdyUnknownFrame extends ByteBufHolder, SpdyFrame, Object{
    content(): ByteBuf;
    copy(): SpdyUnknownFrame;
    duplicate(): SpdyUnknownFrame;
    flags(): number;
    frameType(): number;
    refCnt(): number;
    release(): boolean;
    release(arg0: number): boolean;
    replace(arg0: ByteBuf): SpdyUnknownFrame;
    retain(): SpdyUnknownFrame;
    retain(arg0: number): SpdyUnknownFrame;
    retainedDuplicate(): SpdyUnknownFrame;
    touch(): SpdyUnknownFrame;
    touch(arg0: Object): SpdyUnknownFrame;
}