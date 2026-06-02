import type { WebSocketFrame } from '../../../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrame.d.ts'
import type { WebSocketExtensionFilter } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketExtensionFilter.d.ts'
import type { DeflateEncoder } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/compression/DeflateEncoder.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class PerFrameDeflateEncoder extends DeflateEncoder {
    constructor(arg0: number, arg1: number, arg2: boolean)
    constructor(arg0: number, arg1: number, arg2: boolean, arg3: WebSocketExtensionFilter)
    acceptOutboundMessage(arg0: Object): boolean;
    removeFrameTail(arg0: WebSocketFrame): boolean;
    rsv(arg0: WebSocketFrame): number;
}