import type { Http2FrameCodec } from '../../../../../io/netty/handler/codec/http2/Http2FrameCodec.d.ts'
import type { Http2RemoteFlowController$Listener } from '../../../../../io/netty/handler/codec/http2/Http2RemoteFlowController$Listener.d.ts'
import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Http2FrameCodec$Http2RemoteFlowControllerListener extends Object implements Http2RemoteFlowController$Listener {
    private constructor(null_: Http2FrameCodec)
    writabilityChanged(arg0: Http2Stream): void;
}