import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelDuplexHandler } from '../../../../io/netty/channel/ChannelDuplexHandler.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { ByteToMessageDecoder } from '../../../../io/netty/handler/codec/ByteToMessageDecoder.d.ts'
import type { MessageToByteEncoder } from '../../../../io/netty/handler/codec/MessageToByteEncoder.d.ts'
import type { TypeParameterMatcher } from '../../../../io/netty/util/internal/TypeParameterMatcher.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ByteToMessageCodec<I extends Object | number | string | boolean> extends ChannelDuplexHandler {
    constructor()
    constructor(arg0: Class<I>)
    constructor(arg0: Class<I>, arg1: boolean)
    constructor(arg0: boolean)
    // private decoder: ByteToMessageDecoder;
    // private encoder: MessageToByteEncoder<I>;
    // private outboundMsgMatcher: TypeParameterMatcher;
    acceptOutboundMessage(arg0: Object): boolean;
    channelInactive(arg0: ChannelHandlerContext): void;
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
    channelReadComplete(arg0: ChannelHandlerContext): void;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    decodeLast(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    encode(arg0: ChannelHandlerContext, arg1: I, arg2: ByteBuf): void;
    handlerAdded(arg0: ChannelHandlerContext): void;
    handlerRemoved(arg0: ChannelHandlerContext): void;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
}