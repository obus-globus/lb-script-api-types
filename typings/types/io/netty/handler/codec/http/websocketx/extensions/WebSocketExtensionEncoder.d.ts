import type { MessageToMessageEncoder } from '../../../../../../../io/netty/handler/codec/MessageToMessageEncoder.d.ts'
import type { WebSocketFrame } from '../../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrame.d.ts'
export abstract class WebSocketExtensionEncoder extends MessageToMessageEncoder<WebSocketFrame> {
    constructor()
}