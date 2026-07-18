import type { DefaultHttp2RemoteFlowController } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2RemoteFlowController.d.ts'
import type { Http2Error } from '../../../../../io/netty/handler/codec/http2/Http2Error.d.ts'
import type { Http2Exception } from '../../../../../io/netty/handler/codec/http2/Http2Exception.d.ts'
import type { Http2RemoteFlowController$FlowControlled } from '../../../../../io/netty/handler/codec/http2/Http2RemoteFlowController$FlowControlled.d.ts'
import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { StreamByteDistributor$StreamState } from '../../../../../io/netty/handler/codec/http2/StreamByteDistributor$StreamState.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class DefaultHttp2RemoteFlowController$FlowState extends Object implements StreamByteDistributor$StreamState {
    constructor(null_: DefaultHttp2RemoteFlowController, arg1: Http2Stream)
    // private cancelled: boolean;
    // private markedWritable: boolean;
    // private pendingBytes: number;
    // private pendingWriteQueue: Http2RemoteFlowController$FlowControlled[];
    // private stream: Http2Stream;
    // private window: number;
    // private writing: boolean;
    cancel(arg0: Http2Error, arg1: Throwable): void;
    // private decrementFlowControlWindow(arg0: number): void;
    // private decrementPendingBytes(arg0: number, arg1: boolean): void;
    enqueueFrame(arg0: Http2RemoteFlowController$FlowControlled): void;
    // private enqueueFrameWithoutMerge(arg0: Http2RemoteFlowController$FlowControlled): void;
    hasFrame(): boolean;
    // private incrementPendingBytes(arg0: number, arg1: boolean): void;
    incrementStreamWindow(arg0: number): number;
    isWritable(): boolean;
    markedWritability(): boolean;
    markedWritability(arg0: boolean): void;
    // private peek(): Http2RemoteFlowController$FlowControlled;
    pendingBytes(): number;
    stream(): Http2Stream;
    windowSize(): number;
    windowSize(arg0: number): void;
    // private writableWindow(): number;
    writeAllocatedBytes(arg0: number): number;
    // private writeError(arg0: Http2RemoteFlowController$FlowControlled, arg1: Http2Exception): void;
}