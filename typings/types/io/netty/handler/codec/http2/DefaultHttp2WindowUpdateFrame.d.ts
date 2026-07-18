import type { AbstractHttp2StreamFrame } from '../../../../../io/netty/handler/codec/http2/AbstractHttp2StreamFrame.d.ts'
import type { Http2FrameStream } from '../../../../../io/netty/handler/codec/http2/Http2FrameStream.d.ts'
import type { Http2WindowUpdateFrame } from '../../../../../io/netty/handler/codec/http2/Http2WindowUpdateFrame.d.ts'
export class DefaultHttp2WindowUpdateFrame extends AbstractHttp2StreamFrame implements Http2WindowUpdateFrame {
    constructor(arg0: number)
    // private windowUpdateIncrement: number;
    name(): string;
    stream(): Http2FrameStream;
    stream(arg0: Http2FrameStream): DefaultHttp2WindowUpdateFrame;
    toString(): string;
    windowSizeIncrement(): number;
}