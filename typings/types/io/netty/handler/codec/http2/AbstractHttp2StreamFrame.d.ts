import type { Http2FrameStream } from '../../../../../io/netty/handler/codec/http2/Http2FrameStream.d.ts'
import type { Http2StreamFrame } from '../../../../../io/netty/handler/codec/http2/Http2StreamFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AbstractHttp2StreamFrame extends Object implements Http2StreamFrame {
    constructor()
    // private stream: Http2FrameStream;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    name(): string;
    stream(): Http2FrameStream;
    stream(arg0: Http2FrameStream): AbstractHttp2StreamFrame;
}