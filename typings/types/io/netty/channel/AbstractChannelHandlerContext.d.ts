import type { ByteBufAllocator } from '../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { AbstractChannelHandlerContext$Tasks } from '../../../io/netty/channel/AbstractChannelHandlerContext$Tasks.d.ts'
import type { Channel } from '../../../io/netty/channel/Channel.d.ts'
import type { ChannelFuture } from '../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelHandler } from '../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelHandlerContext } from '../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelProgressivePromise } from '../../../io/netty/channel/ChannelProgressivePromise.d.ts'
import type { ChannelPromise } from '../../../io/netty/channel/ChannelPromise.d.ts'
import type { Attribute } from '../../../io/netty/util/Attribute.d.ts'
import type { AttributeKey } from '../../../io/netty/util/AttributeKey.d.ts'
import type { ResourceLeakHint } from '../../../io/netty/util/ResourceLeakHint.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export abstract class AbstractChannelHandlerContext extends Object implements ChannelHandlerContext, ResourceLeakHint {
    constructor(arg0: (Object | null)[], arg1: (Object | null)[], arg2: string, arg3: Class<ChannelHandler>)
    // private childExecutor: (Object | null)[];
    // private contextExecutor: (Object | null)[];
    // private executionMask: number;
    // private handlerState: number;
    // private invokeTasks: AbstractChannelHandlerContext$Tasks;
    // private name: string;
    // private next: AbstractChannelHandlerContext;
    // private ordered: boolean;
    // private pipeline: (Object | null)[];
    // private prev: AbstractChannelHandlerContext;
    // private succeededFuture: ChannelFuture;
    alloc(): ByteBufAllocator;
    attr<T extends Object | number | string | boolean>(arg0: AttributeKey<T>): Attribute<T>;
    bind(arg0: SocketAddress): ChannelFuture;
    bind(arg0: SocketAddress, arg1: ChannelPromise): ChannelFuture;
    callHandlerAdded(): void;
    callHandlerRemoved(): void;
    channel(): Channel;
    close(): ChannelFuture;
    close(arg0: ChannelPromise): ChannelFuture;
    connect(arg0: SocketAddress): ChannelFuture;
    connect(arg0: SocketAddress, arg1: ChannelPromise): ChannelFuture;
    connect(arg0: SocketAddress, arg1: SocketAddress): ChannelFuture;
    connect(arg0: SocketAddress, arg1: SocketAddress, arg2: ChannelPromise): ChannelFuture;
    deregister(): ChannelFuture;
    deregister(arg0: ChannelPromise): ChannelFuture;
    disconnect(): ChannelFuture;
    disconnect(arg0: ChannelPromise): ChannelFuture;
    executor(): (Object | null)[];
    // private findContextInbound(arg0: number): AbstractChannelHandlerContext;
    // private findContextOutbound(arg0: number): AbstractChannelHandlerContext;
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
    getInvokeTasks(): AbstractChannelHandlerContext$Tasks;
    handler(): ChannelHandler;
    hasAttr<T extends Object | number | string | boolean>(arg0: AttributeKey<T>): boolean;
    // private invokeBind(arg0: SocketAddress, arg1: ChannelPromise): void;
    // private invokeClose(arg0: ChannelPromise): void;
    // private invokeConnect(arg0: SocketAddress, arg1: SocketAddress, arg2: ChannelPromise): void;
    // private invokeDeregister(arg0: ChannelPromise): void;
    // private invokeDisconnect(arg0: ChannelPromise): void;
    // private invokeExceptionCaught(arg0: Throwable): void;
    // private invokeFlush(): void;
    // private invokeFlush0(): void;
    invokeHandler(): boolean;
    // private isNotValidPromise(arg0: ChannelPromise, arg1: boolean): boolean;
    isRemoved(): boolean;
    name(): string;
    newFailedFuture(arg0: Throwable): ChannelFuture;
    newProgressivePromise(): ChannelProgressivePromise;
    newPromise(): ChannelPromise;
    newSucceededFuture(): ChannelFuture;
    pipeline(): Map$Entry<string, ChannelHandler>[];
    read(): ChannelHandlerContext;
    setAddComplete(): boolean;
    setAddPending(): void;
    setRemoved(): void;
    toHintString(): string;
    toString(): string;
    // private validateWrite(arg0: Object, arg1: ChannelPromise): boolean;
    voidPromise(): ChannelPromise;
    write(arg0: Object): ChannelFuture;
    write(arg0: Object, arg1: ChannelPromise): ChannelFuture;
    write(arg0: Object, arg1: boolean, arg2: ChannelPromise): void;
    writeAndFlush(arg0: Object): ChannelFuture;
    writeAndFlush(arg0: Object, arg1: ChannelPromise): ChannelFuture;
}