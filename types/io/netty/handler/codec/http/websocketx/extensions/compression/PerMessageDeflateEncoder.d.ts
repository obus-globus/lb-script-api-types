import type { ChannelHandlerContext } from '../../../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { WebSocketFrame } from '../../../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrame.d.ts'
import type { WebSocketExtensionFilter } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketExtensionFilter.d.ts'
import type { DeflateEncoder } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/compression/DeflateEncoder.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class PerMessageDeflateEncoder extends DeflateEncoder {
    constructor(arg0: number, arg1: number, arg2: boolean)
    constructor(arg0: number, arg1: number, arg2: boolean, arg3: WebSocketExtensionFilter)
    // private compressing: boolean;
    acceptOutboundMessage(arg0: Object): boolean;
    encode(arg0: ChannelHandlerContext, arg1: WebSocketFrame, arg2: Object[]): void;
    removeFrameTail(arg0: WebSocketFrame): boolean;
    rsv(arg0: WebSocketFrame): number;
}