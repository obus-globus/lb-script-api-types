import type { MessageToMessageDecoder } from '../../../../../../../io/netty/handler/codec/MessageToMessageDecoder.d.ts'
import type { WebSocketFrame } from '../../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrame.d.ts'
export abstract class WebSocketExtensionDecoder extends MessageToMessageDecoder<WebSocketFrame> {
    constructor()
}