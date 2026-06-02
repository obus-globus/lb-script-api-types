import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { DatagramPacket } from '../../../../io/netty/channel/socket/DatagramPacket.d.ts'
import type { MessageToMessageDecoder } from '../../../../io/netty/handler/codec/MessageToMessageDecoder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class DatagramPacketDecoder extends MessageToMessageDecoder<DatagramPacket> {
    constructor(arg0: MessageToMessageDecoder<ByteBuf>)
    // private decoder: MessageToMessageDecoder<ByteBuf>;
    acceptInboundMessage(arg0: Object): boolean;
    channelActive(arg0: ChannelHandlerContext): void;
    channelInactive(arg0: ChannelHandlerContext): void;
    channelReadComplete(arg0: ChannelHandlerContext): void;
    channelRegistered(arg0: ChannelHandlerContext): void;
    channelUnregistered(arg0: ChannelHandlerContext): void;
    channelWritabilityChanged(arg0: ChannelHandlerContext): void;
    decode(arg0: ChannelHandlerContext, arg1: DatagramPacket, arg2: Object[]): void;
    exceptionCaught(arg0: ChannelHandlerContext, arg1: Throwable): void;
    handlerAdded(arg0: ChannelHandlerContext): void;
    handlerRemoved(arg0: ChannelHandlerContext): void;
    isSharable(): boolean;
    userEventTriggered(arg0: ChannelHandlerContext, arg1: Object): void;
}