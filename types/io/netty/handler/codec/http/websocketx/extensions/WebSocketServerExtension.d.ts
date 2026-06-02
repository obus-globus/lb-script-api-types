import type { WebSocketExtension } from '../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketExtension.d.ts'
import type { WebSocketExtensionData } from '../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketExtensionData.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface WebSocketServerExtension extends WebSocketExtension, Object{
    newReponseData(): WebSocketExtensionData;
}