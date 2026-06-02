import type { ByteToMessageDecoder$Cumulator } from '../../../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { WebSocket08FrameDecoder } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocket08FrameDecoder.d.ts'
import type { WebSocketDecoderConfig } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketDecoderConfig.d.ts'
export class WebSocket07FrameDecoder extends WebSocket08FrameDecoder {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor(arg0: WebSocketDecoderConfig)
    constructor(arg0: boolean, arg1: boolean, arg2: number)
    constructor(arg0: boolean, arg1: boolean, arg2: number, arg3: boolean)
}