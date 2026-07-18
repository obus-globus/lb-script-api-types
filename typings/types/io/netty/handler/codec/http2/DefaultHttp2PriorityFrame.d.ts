import type { AbstractHttp2StreamFrame } from '../../../../../io/netty/handler/codec/http2/AbstractHttp2StreamFrame.d.ts'
import type { Http2FrameStream } from '../../../../../io/netty/handler/codec/http2/Http2FrameStream.d.ts'
import type { Http2PriorityFrame } from '../../../../../io/netty/handler/codec/http2/Http2PriorityFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultHttp2PriorityFrame extends AbstractHttp2StreamFrame implements Http2PriorityFrame {
    constructor(arg0: number, arg1: number, arg2: boolean)
    // private exclusive: boolean;
    // private streamDependency: number;
    // private weight: number;
    equals(arg0: Object | null): boolean;
    exclusive(): boolean;
    hashCode(): number;
    name(): string;
    stream(): Http2FrameStream;
    stream(arg0: Http2FrameStream): DefaultHttp2PriorityFrame;
    streamDependency(): number;
    toString(): string;
    weight(): number;
}