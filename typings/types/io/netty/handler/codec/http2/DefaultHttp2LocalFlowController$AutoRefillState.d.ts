import type { DefaultHttp2LocalFlowController } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2LocalFlowController.d.ts'
import type { DefaultHttp2LocalFlowController$DefaultState } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2LocalFlowController$DefaultState.d.ts'
import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
export class DefaultHttp2LocalFlowController$AutoRefillState extends DefaultHttp2LocalFlowController$DefaultState {
    constructor(null_: DefaultHttp2LocalFlowController, arg1: Http2Stream, arg2: number)
    consumeBytes(arg0: number): boolean;
    receiveFlowControlledFrame(arg0: number): void;
}