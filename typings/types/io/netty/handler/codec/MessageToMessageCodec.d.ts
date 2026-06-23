import type { ChannelDuplexHandler } from '../../../../io/netty/channel/ChannelDuplexHandler.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { MessageToMessageDecoder } from '../../../../io/netty/handler/codec/MessageToMessageDecoder.d.ts'
import type { MessageToMessageEncoder } from '../../../../io/netty/handler/codec/MessageToMessageEncoder.d.ts'
import type { TypeParameterMatcher } from '../../../../io/netty/util/internal/TypeParameterMatcher.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class MessageToMessageCodec<INBOUND_IN extends unknown, OUTBOUND_IN extends unknown> extends ChannelDuplexHandler {
    constructor()
    constructor(arg0: Class<INBOUND_IN>, arg1: Class<OUTBOUND_IN>)
    // private decoder: MessageToMessageDecoder<Object>;
    // private encoder: MessageToMessageEncoder<Object>;
    // private inboundMsgMatcher: TypeParameterMatcher;
    // private outboundMsgMatcher: TypeParameterMatcher;
    acceptInboundMessage(arg0: Object): boolean;
    acceptOutboundMessage(arg0: Object): boolean;
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
    channelReadComplete(arg0: ChannelHandlerContext): void;
    decode(arg0: ChannelHandlerContext, arg1: INBOUND_IN, arg2: Object[]): void;
    encode(arg0: ChannelHandlerContext, arg1: OUTBOUND_IN, arg2: Object[]): void;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
}