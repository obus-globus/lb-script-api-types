import type { ChannelHandlerContext } from '../../../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { WebSocketFrame } from '../../../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrame.d.ts'
import type { WebSocketExtensionFilter } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketExtensionFilter.d.ts'
import type { DeflateDecoder } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/compression/DeflateDecoder.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class PerMessageDeflateDecoder extends DeflateDecoder {
    constructor(arg0: boolean, arg1: WebSocketExtensionFilter, arg2: number)
    constructor(arg0: boolean, arg1: number)
    // private compressing: boolean;
    acceptInboundMessage(arg0: Object): boolean;
    appendFrameTail(arg0: WebSocketFrame): boolean;
    decode(arg0: ChannelHandlerContext, arg1: WebSocketFrame, arg2: Object[]): void;
    newRsv(arg0: WebSocketFrame): number;
}