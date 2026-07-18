import type { Http2FrameStream } from '../../../../../io/netty/handler/codec/http2/Http2FrameStream.d.ts'
import type { Http2StreamFrame } from '../../../../../io/netty/handler/codec/http2/Http2StreamFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Http2PushPromiseFrame extends Http2StreamFrame, Object{
    http2Headers(): (Object | null)[];
    name(): string;
    padding(): number;
    promisedStreamId(): number;
    pushStream(): Http2FrameStream;
    pushStream(arg0: Http2FrameStream): Http2StreamFrame;
    stream(arg0: Http2FrameStream): Http2PushPromiseFrame;
    stream(): Http2FrameStream;
}