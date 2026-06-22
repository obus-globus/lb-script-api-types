import type { WebSocketExtension } from '../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketExtension.d.ts'
import type { WebSocketExtensionDecoder } from '../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketExtensionDecoder.d.ts'
import type { WebSocketExtensionEncoder } from '../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketExtensionEncoder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface WebSocketClientExtension extends WebSocketExtension, Object{
    newExtensionDecoder(): WebSocketExtensionDecoder;
    newExtensionEncoder(): WebSocketExtensionEncoder;
    rsv(): number;
}