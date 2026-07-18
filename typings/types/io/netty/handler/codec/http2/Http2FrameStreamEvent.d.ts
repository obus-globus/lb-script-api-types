import type { Http2FrameStream } from '../../../../../io/netty/handler/codec/http2/Http2FrameStream.d.ts'
import type { Http2FrameStreamEvent$Type } from '../../../../../io/netty/handler/codec/http2/Http2FrameStreamEvent$Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Http2FrameStreamEvent extends Object {
    private constructor(arg0: Http2FrameStream, arg1: Http2FrameStreamEvent$Type)
    // private stream: Http2FrameStream;
    // private type: Http2FrameStreamEvent$Type;
    stream(): Http2FrameStream;
    type(): Http2FrameStreamEvent$Type;
}