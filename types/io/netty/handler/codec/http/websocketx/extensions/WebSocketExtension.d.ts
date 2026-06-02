import type { WebSocketExtensionDecoder } from '../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketExtensionDecoder.d.ts'
import type { WebSocketExtensionEncoder } from '../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketExtensionEncoder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface WebSocketExtension extends Object{
    newExtensionDecoder(): WebSocketExtensionDecoder;
    newExtensionEncoder(): WebSocketExtensionEncoder;
    rsv(): number;
}