import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufHolder } from '../../../../../io/netty/buffer/ByteBufHolder.d.ts'
import type { Http2Flags } from '../../../../../io/netty/handler/codec/http2/Http2Flags.d.ts'
import type { Http2FrameStream } from '../../../../../io/netty/handler/codec/http2/Http2FrameStream.d.ts'
import type { Http2StreamFrame } from '../../../../../io/netty/handler/codec/http2/Http2StreamFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Http2UnknownFrame extends ByteBufHolder, Http2StreamFrame, Object{
    content(): ByteBuf;
    copy(): Http2UnknownFrame;
    duplicate(): Http2UnknownFrame;
    flags(): Http2Flags;
    frameType(): number;
    name(): string;
    refCnt(): number;
    release(): boolean;
    release(arg0: number): boolean;
    replace(arg0: ByteBuf): Http2UnknownFrame;
    retain(): Http2UnknownFrame;
    retain(arg0: number): Http2UnknownFrame;
    retainedDuplicate(): Http2UnknownFrame;
    stream(): Http2FrameStream;
    stream(arg0: Http2FrameStream): Http2UnknownFrame;
    touch(): Http2UnknownFrame;
    touch(arg0: Object): Http2UnknownFrame;
}