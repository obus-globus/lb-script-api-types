import type { Http2FrameStream } from '../../../../../io/netty/handler/codec/http2/Http2FrameStream.d.ts'
import type { Http2StreamFrame } from '../../../../../io/netty/handler/codec/http2/Http2StreamFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Http2WindowUpdateFrame extends Http2StreamFrame, Object{
    name(): string;
    stream(): Http2FrameStream;
    stream(arg0: Http2FrameStream): Http2StreamFrame;
    windowSizeIncrement(): number;
}