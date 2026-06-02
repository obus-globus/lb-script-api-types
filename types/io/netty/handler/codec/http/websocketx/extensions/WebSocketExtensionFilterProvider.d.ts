import type { WebSocketExtensionFilter } from '../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketExtensionFilter.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface WebSocketExtensionFilterProvider extends Object{
    decoderFilter(): WebSocketExtensionFilter;
    encoderFilter(): WebSocketExtensionFilter;
}