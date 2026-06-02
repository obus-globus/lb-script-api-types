import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToMessageEncoder } from '../../../../../../io/netty/handler/codec/MessageToMessageEncoder.d.ts'
import type { WebSocketFrame } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrame.d.ts'
import type { WebSocketFrameEncoder } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrameEncoder.d.ts'
import type { WebSocketFrameMaskGenerator } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrameMaskGenerator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WebSocket08FrameEncoder extends MessageToMessageEncoder<WebSocketFrame> implements WebSocketFrameEncoder {
    constructor(arg0: WebSocketFrameMaskGenerator)
    constructor(arg0: boolean)
    // private maskGenerator: WebSocketFrameMaskGenerator;
    encode(arg0: ChannelHandlerContext, arg1: WebSocketFrame, arg2: Object[]): void;
}