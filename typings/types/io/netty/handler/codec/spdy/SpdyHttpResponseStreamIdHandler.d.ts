import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToMessageCodec } from '../../../../../io/netty/handler/codec/MessageToMessageCodec.d.ts'
import type { HttpMessage } from '../../../../../io/netty/handler/codec/http/HttpMessage.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SpdyHttpResponseStreamIdHandler extends MessageToMessageCodec<Object, HttpMessage> {
    constructor()
    // private ids: number[];
    acceptInboundMessage(arg0: Object): boolean;
    decode(arg0: ChannelHandlerContext, arg1: Object, arg2: Object[]): void;
    encode(arg0: ChannelHandlerContext, arg1: HttpMessage, arg2: Object[]): void;
}