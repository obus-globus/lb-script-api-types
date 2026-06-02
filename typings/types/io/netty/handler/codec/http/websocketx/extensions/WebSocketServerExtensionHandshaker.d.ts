import type { WebSocketExtensionData } from '../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketExtensionData.d.ts'
import type { WebSocketServerExtension } from '../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketServerExtension.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface WebSocketServerExtensionHandshaker extends Object{
    handshakeExtension(arg0: WebSocketExtensionData): WebSocketServerExtension;
}