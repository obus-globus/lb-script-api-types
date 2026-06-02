import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToMessageDecoder } from '../../../../../io/netty/handler/codec/MessageToMessageDecoder.d.ts'
import type { TextWebSocketFrame } from '../../../../../io/netty/handler/codec/http/websocketx/TextWebSocketFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WebSocketToJsonCodec extends MessageToMessageDecoder<TextWebSocketFrame> {
    constructor()
    decode(ctx: ChannelHandlerContext, msg: TextWebSocketFrame, out: Object[]): void;
}