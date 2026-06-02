import type { AddressedEnvelope } from '../../../../io/netty/channel/AddressedEnvelope.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { MessageToMessageEncoder } from '../../../../io/netty/handler/codec/MessageToMessageEncoder.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class DatagramPacketEncoder<M extends Object | number | string | boolean> extends MessageToMessageEncoder<AddressedEnvelope<M, InetSocketAddress>> {
    constructor(arg0: MessageToMessageEncoder<M>)
    // private encoder: MessageToMessageEncoder<M>;
    acceptOutboundMessage(arg0: Object): boolean;
    bind(arg0: ChannelHandlerContext, arg1: SocketAddress, arg2: ChannelPromise): void;
    close(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    connect(arg0: ChannelHandlerContext, arg1: SocketAddress, arg2: SocketAddress, arg3: ChannelPromise): void;
    deregister(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    disconnect(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    encode(arg0: ChannelHandlerContext, arg1: AddressedEnvelope<M, InetSocketAddress>, arg2: Object[]): void;
    exceptionCaught(arg0: ChannelHandlerContext, arg1: Throwable): void;
    flush(arg0: ChannelHandlerContext): void;
    handlerAdded(arg0: ChannelHandlerContext): void;
    handlerRemoved(arg0: ChannelHandlerContext): void;
    isSharable(): boolean;
    read(arg0: ChannelHandlerContext): void;
}