import type { ByteBufAllocator } from '../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { Channel } from '../../../io/netty/channel/Channel.d.ts'
import type { ChannelFuture } from '../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelHandler } from '../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelInboundInvoker } from '../../../io/netty/channel/ChannelInboundInvoker.d.ts'
import type { ChannelOutboundInvoker } from '../../../io/netty/channel/ChannelOutboundInvoker.d.ts'
import type { Attribute } from '../../../io/netty/util/Attribute.d.ts'
import type { AttributeKey } from '../../../io/netty/util/AttributeKey.d.ts'
import type { AttributeMap } from '../../../io/netty/util/AttributeMap.d.ts'
import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export interface ChannelHandlerContext extends ChannelInboundInvoker, ChannelOutboundInvoker, AttributeMap, Object{
    alloc(): ByteBufAllocator;
    attr(arg0: AttributeKey<T>): Attribute<T>;
    bind(arg0: SocketAddress): ChannelFuture;
    channel(): Channel;
    close(): ChannelFuture;
    connect(arg0: SocketAddress): ChannelFuture;
    connect(arg0: SocketAddress, arg1: SocketAddress): ChannelFuture;
    deregister(): ChannelFuture;
    disconnect(): ChannelFuture;
    executor(): (Object | null)[];
    fireChannelActive(): ChannelHandlerContext;
    fireChannelInactive(): ChannelHandlerContext;
    fireChannelRead(arg0: Object): ChannelHandlerContext;
    fireChannelReadComplete(): ChannelHandlerContext;
    fireChannelRegistered(): ChannelHandlerContext;
    fireChannelUnregistered(): ChannelHandlerContext;
    fireChannelWritabilityChanged(): ChannelHandlerContext;
    fireExceptionCaught(arg0: Throwable): ChannelHandlerContext;
    fireUserEventTriggered(arg0: Object): ChannelHandlerContext;
    flush(): ChannelHandlerContext;
    handler(): ChannelHandler;
    hasAttr(arg0: AttributeKey<T>): boolean;
    isRemoved(): boolean;
    name(): string;
    pipeline(): Map$Entry<string, ChannelHandler>[];
    read(): ChannelHandlerContext;
    write(arg0: Object): ChannelFuture;
    writeAndFlush(arg0: Object): ChannelFuture;
}