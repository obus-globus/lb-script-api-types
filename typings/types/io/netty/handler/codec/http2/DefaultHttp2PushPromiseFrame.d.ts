import type { Http2FrameStream } from '../../../../../io/netty/handler/codec/http2/Http2FrameStream.d.ts'
import type { Http2PushPromiseFrame } from '../../../../../io/netty/handler/codec/http2/Http2PushPromiseFrame.d.ts'
import type { Http2StreamFrame } from '../../../../../io/netty/handler/codec/http2/Http2StreamFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultHttp2PushPromiseFrame extends Object implements Http2PushPromiseFrame {
    constructor(arg0: (Object | null)[])
    constructor(arg0: (Object | null)[], arg1: number)
    constructor(arg0: (Object | null)[], arg1: number, arg2: number)
    // private http2Headers: (Object | null)[];
    // private padding: number;
    // private promisedStreamId: number;
    // private pushStreamFrame: Http2FrameStream;
    // private streamFrame: Http2FrameStream;
    http2Headers(): (Object | null)[];
    name(): string;
    padding(): number;
    promisedStreamId(): number;
    pushStream(): Http2FrameStream;
    pushStream(arg0: Http2FrameStream): Http2StreamFrame;
    stream(): Http2FrameStream;
    stream(arg0: Http2FrameStream): Http2PushPromiseFrame;
    toString(): string;
}