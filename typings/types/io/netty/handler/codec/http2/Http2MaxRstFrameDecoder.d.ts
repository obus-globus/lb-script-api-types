import type { DecoratingHttp2ConnectionDecoder } from '../../../../../io/netty/handler/codec/http2/DecoratingHttp2ConnectionDecoder.d.ts'
import type { Http2ConnectionDecoder } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionDecoder.d.ts'
import type { Http2FrameListener } from '../../../../../io/netty/handler/codec/http2/Http2FrameListener.d.ts'
export class Http2MaxRstFrameDecoder extends DecoratingHttp2ConnectionDecoder {
    constructor(arg0: Http2ConnectionDecoder, arg1: number, arg2: number)
    // private maxRstFramesPerWindow: number;
    // private secondsPerWindow: number;
    frameListener(): Http2FrameListener;
    frameListener(arg0: Http2FrameListener): void;
    frameListener0(): Http2FrameListener;
}