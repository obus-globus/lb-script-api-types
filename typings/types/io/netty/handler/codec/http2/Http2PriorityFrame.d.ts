import type { Http2FrameStream } from '../../../../../io/netty/handler/codec/http2/Http2FrameStream.d.ts'
import type { Http2StreamFrame } from '../../../../../io/netty/handler/codec/http2/Http2StreamFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Http2PriorityFrame extends Http2StreamFrame, Object{
    exclusive(): boolean;
    name(): string;
    stream(arg0: Http2FrameStream): Http2PriorityFrame;
    stream(): Http2FrameStream;
    streamDependency(): number;
    weight(): number;
}