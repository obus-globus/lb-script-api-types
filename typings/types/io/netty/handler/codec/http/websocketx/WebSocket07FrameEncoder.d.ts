import type { WebSocket08FrameEncoder } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocket08FrameEncoder.d.ts'
import type { WebSocketFrameMaskGenerator } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrameMaskGenerator.d.ts'
export class WebSocket07FrameEncoder extends WebSocket08FrameEncoder {
    constructor(arg0: WebSocketFrameMaskGenerator)
    constructor(arg0: boolean)
}