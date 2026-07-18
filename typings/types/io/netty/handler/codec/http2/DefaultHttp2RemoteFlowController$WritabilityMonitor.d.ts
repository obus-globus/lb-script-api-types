import type { DefaultHttp2RemoteFlowController } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2RemoteFlowController.d.ts'
import type { DefaultHttp2RemoteFlowController$FlowState } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2RemoteFlowController$FlowState.d.ts'
import type { Http2RemoteFlowController$FlowControlled } from '../../../../../io/netty/handler/codec/http2/Http2RemoteFlowController$FlowControlled.d.ts'
import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { StreamByteDistributor$Writer } from '../../../../../io/netty/handler/codec/http2/StreamByteDistributor$Writer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultHttp2RemoteFlowController$WritabilityMonitor extends Object implements StreamByteDistributor$Writer {
    private constructor(null_: DefaultHttp2RemoteFlowController)
    // private inWritePendingBytes: boolean;
    // private totalPendingBytes: number;
    channelWritabilityChange(): void;
    enqueueFrame(arg0: DefaultHttp2RemoteFlowController$FlowState, arg1: Http2RemoteFlowController$FlowControlled): void;
    incrementPendingBytes(arg0: number): void;
    incrementWindowSize(arg0: DefaultHttp2RemoteFlowController$FlowState, arg1: number): void;
    initialWindowSize(arg0: number): void;
    isWritable(arg0: DefaultHttp2RemoteFlowController$FlowState): boolean;
    isWritableConnection(): boolean;
    stateCancelled(arg0: DefaultHttp2RemoteFlowController$FlowState): void;
    windowSize(arg0: DefaultHttp2RemoteFlowController$FlowState, arg1: number): void;
    write(arg0: Http2Stream, arg1: number): void;
    writePendingBytes(): void;
}