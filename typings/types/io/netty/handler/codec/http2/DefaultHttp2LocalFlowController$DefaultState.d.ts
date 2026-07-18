import type { DefaultHttp2LocalFlowController } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2LocalFlowController.d.ts'
import type { DefaultHttp2LocalFlowController$FlowState } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2LocalFlowController$FlowState.d.ts'
import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultHttp2LocalFlowController$DefaultState extends Object implements DefaultHttp2LocalFlowController$FlowState {
    constructor(null_: DefaultHttp2LocalFlowController, arg1: Http2Stream, arg2: number)
    // private endOfStream: boolean;
    // private initialStreamWindowSize: number;
    // private lowerBound: number;
    // private processedWindow: number;
    // private stream: Http2Stream;
    // private streamWindowUpdateRatio: number;
    // private window: number;
    consumeBytes(arg0: number): boolean;
    endOfStream(arg0: boolean): void;
    incrementFlowControlWindows(arg0: number): void;
    incrementInitialStreamWindow(arg0: number): void;
    initialWindowSize(): number;
    receiveFlowControlledFrame(arg0: number): void;
    // private returnProcessedBytes(arg0: number): void;
    unconsumedBytes(): number;
    window(arg0: number): void;
    windowSize(): number;
    windowUpdateRatio(): number;
    windowUpdateRatio(arg0: number): void;
    // private writeWindowUpdate(): void;
    writeWindowUpdateIfNeeded(): boolean;
}