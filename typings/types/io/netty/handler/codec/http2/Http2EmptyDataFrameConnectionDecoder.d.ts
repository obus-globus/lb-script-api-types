import type { DecoratingHttp2ConnectionDecoder } from '../../../../../io/netty/handler/codec/http2/DecoratingHttp2ConnectionDecoder.d.ts'
import type { Http2ConnectionDecoder } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionDecoder.d.ts'
import type { Http2FrameListener } from '../../../../../io/netty/handler/codec/http2/Http2FrameListener.d.ts'
export class Http2EmptyDataFrameConnectionDecoder extends DecoratingHttp2ConnectionDecoder {
    constructor(arg0: Http2ConnectionDecoder, arg1: number)
    // private maxConsecutiveEmptyFrames: number;
    frameListener(): Http2FrameListener;
    frameListener(arg0: Http2FrameListener): void;
    frameListener0(): Http2FrameListener;
}