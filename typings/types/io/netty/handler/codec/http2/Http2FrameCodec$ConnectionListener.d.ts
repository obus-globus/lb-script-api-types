import type { Http2ConnectionAdapter } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionAdapter.d.ts'
import type { Http2FrameCodec } from '../../../../../io/netty/handler/codec/http2/Http2FrameCodec.d.ts'
import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
export class Http2FrameCodec$ConnectionListener extends Http2ConnectionAdapter {
    private constructor(null_: Http2FrameCodec)
    // private onHttp2StreamStateChanged0(arg0: Http2Stream): void;
    onStreamActive(arg0: Http2Stream): void;
    onStreamAdded(arg0: Http2Stream): void;
    onStreamClosed(arg0: Http2Stream): void;
    onStreamHalfClosed(arg0: Http2Stream): void;
}