import type { WebSocketFrame } from '../../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrame.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface WebSocketExtensionFilter extends Object{
    mustSkip(arg0: WebSocketFrame): boolean;
}