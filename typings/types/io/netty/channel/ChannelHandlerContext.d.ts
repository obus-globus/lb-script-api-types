import type { ByteBufAllocator } from '../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { Channel } from '../../../io/netty/channel/Channel.d.ts'
import type { ChannelFuture } from '../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelHandler } from '../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelInboundInvoker } from '../../../io/netty/channel/ChannelInboundInvoker.d.ts'
import type { ChannelOutboundInvoker } from '../../../io/netty/channel/ChannelOutboundInvoker.d.ts'
import type { ChannelProgressivePromise } from '../../../io/netty/channel/ChannelProgressivePromise.d.ts'
import type { ChannelPromise } from '../../../io/netty/channel/ChannelPromise.d.ts'
import type { Attribute } from '../../../io/netty/util/Attribute.d.ts'
import type { AttributeKey } from '../../../io/netty/util/AttributeKey.d.ts'
import type { AttributeMap } from '../../../io/netty/util/AttributeMap.d.ts'
import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export interface ChannelHandlerContext extends ChannelInboundInvoker, ChannelOutboundInvoker, AttributeMap, Object{
    alloc(): ByteBufAllocator;
    attr<T extends unknown>(arg0: AttributeKey<T>): Attribute<T>;
    bind(arg0: SocketAddress): ChannelFuture;
    bind(arg0: SocketAddress, arg1: ChannelPromise): ChannelFuture;
    channel(): Channel;
    close(): ChannelFuture;
    close(arg0: ChannelPromise): ChannelFuture;
    connect(arg0: SocketAddress): ChannelFuture;
    connect(arg0: SocketAddress, arg1: SocketAddress): ChannelFuture;
    connect(arg0: SocketAddress, arg1: SocketAddress, arg2: ChannelPromise): ChannelFuture;
    deregister(): ChannelFuture;
    deregister(arg0: ChannelPromise): ChannelFuture;
    disconnect(): ChannelFuture;
    disconnect(arg0: ChannelPromise): ChannelFuture;
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
    hasAttr<T extends unknown>(arg0: AttributeKey<T>): boolean;
    isRemoved(): boolean;
    name(): string;
    newFailedFuture(arg0: Throwable): ChannelFuture;
    newProgressivePromise(): ChannelProgressivePromise;
    newPromise(): ChannelPromise;
    newSucceededFuture(): ChannelFuture;
    pipeline(): Map$Entry<string, ChannelHandler>[];
    read(): ChannelHandlerContext;
    voidPromise(): ChannelPromise;
    write(arg0: Object): ChannelFuture;
    write(arg0: Object, arg1: ChannelPromise): ChannelFuture;
    writeAndFlush(arg0: Object): ChannelFuture;
    writeAndFlush(arg0: Object, arg1: ChannelPromise): ChannelFuture;
}