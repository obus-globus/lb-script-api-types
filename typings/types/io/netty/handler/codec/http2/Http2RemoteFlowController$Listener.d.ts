import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Http2RemoteFlowController$Listener extends Object{
    writabilityChanged(arg0: Http2Stream): void;
}