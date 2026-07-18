import type { DefaultHttp2RemoteFlowController } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2RemoteFlowController.d.ts'
import type { DefaultHttp2RemoteFlowController$FlowState } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2RemoteFlowController$FlowState.d.ts'
import type { DefaultHttp2RemoteFlowController$WritabilityMonitor } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2RemoteFlowController$WritabilityMonitor.d.ts'
import type { Http2RemoteFlowController$FlowControlled } from '../../../../../io/netty/handler/codec/http2/Http2RemoteFlowController$FlowControlled.d.ts'
import type { Http2RemoteFlowController$Listener } from '../../../../../io/netty/handler/codec/http2/Http2RemoteFlowController$Listener.d.ts'
import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { Http2StreamVisitor } from '../../../../../io/netty/handler/codec/http2/Http2StreamVisitor.d.ts'
export class DefaultHttp2RemoteFlowController$ListenerWritabilityMonitor extends DefaultHttp2RemoteFlowController$WritabilityMonitor implements Http2StreamVisitor {
    constructor(null_: DefaultHttp2RemoteFlowController, arg1: Http2RemoteFlowController$Listener)
    // private listener: Http2RemoteFlowController$Listener;
    channelWritabilityChange(): void;
    // private checkAllWritabilityChanged(): void;
    // private checkConnectionThenStreamWritabilityChanged(arg0: DefaultHttp2RemoteFlowController$FlowState): void;
    // private checkStateWritability(arg0: DefaultHttp2RemoteFlowController$FlowState): void;
    enqueueFrame(arg0: DefaultHttp2RemoteFlowController$FlowState, arg1: Http2RemoteFlowController$FlowControlled): void;
    incrementWindowSize(arg0: DefaultHttp2RemoteFlowController$FlowState, arg1: number): void;
    initialWindowSize(arg0: number): void;
    // private notifyWritabilityChanged(arg0: DefaultHttp2RemoteFlowController$FlowState): void;
    stateCancelled(arg0: DefaultHttp2RemoteFlowController$FlowState): void;
    visit(arg0: Http2Stream): boolean;
    windowSize(arg0: DefaultHttp2RemoteFlowController$FlowState, arg1: number): void;
}