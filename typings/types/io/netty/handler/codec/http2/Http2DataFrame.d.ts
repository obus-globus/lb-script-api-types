import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufHolder } from '../../../../../io/netty/buffer/ByteBufHolder.d.ts'
import type { Http2FrameStream } from '../../../../../io/netty/handler/codec/http2/Http2FrameStream.d.ts'
import type { Http2StreamFrame } from '../../../../../io/netty/handler/codec/http2/Http2StreamFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Http2DataFrame extends ByteBufHolder, Http2StreamFrame, Object{
    content(): ByteBuf;
    copy(): Http2DataFrame;
    duplicate(): Http2DataFrame;
    initialFlowControlledBytes(): number;
    isEndStream(): boolean;
    name(): string;
    padding(): number;
    refCnt(): number;
    release(): boolean;
    release(arg0: number): boolean;
    replace(arg0: ByteBuf): Http2DataFrame;
    retain(): Http2DataFrame;
    retain(arg0: number): Http2DataFrame;
    retainedDuplicate(): Http2DataFrame;
    stream(): Http2FrameStream;
    stream(arg0: Http2FrameStream): Http2StreamFrame;
    touch(): Http2DataFrame;
    touch(arg0: Object): Http2DataFrame;
}