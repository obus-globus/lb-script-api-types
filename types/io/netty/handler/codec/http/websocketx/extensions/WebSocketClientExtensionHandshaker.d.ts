import type { WebSocketClientExtension } from '../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketClientExtension.d.ts'
import type { WebSocketExtensionData } from '../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketExtensionData.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface WebSocketClientExtensionHandshaker extends Object{
    handshakeExtension(arg0: WebSocketExtensionData): WebSocketClientExtension;
    newRequestData(): WebSocketExtensionData;
}