import type { AbstractChannel } from '../../../../io/netty/channel/AbstractChannel.d.ts'
import type { AbstractChannel$AbstractUnsafe } from '../../../../io/netty/channel/AbstractChannel$AbstractUnsafe.d.ts'
import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { Channel$Unsafe } from '../../../../io/netty/channel/Channel$Unsafe.d.ts'
import type { ChannelConfig } from '../../../../io/netty/channel/ChannelConfig.d.ts'
import type { ChannelFuture } from '../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelFutureListener } from '../../../../io/netty/channel/ChannelFutureListener.d.ts'
import type { ChannelHandler } from '../../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelId } from '../../../../io/netty/channel/ChannelId.d.ts'
import type { ChannelMetadata } from '../../../../io/netty/channel/ChannelMetadata.d.ts'
import type { ChannelOutboundBuffer } from '../../../../io/netty/channel/ChannelOutboundBuffer.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { EmbeddedChannel$Builder } from '../../../../io/netty/channel/embedded/EmbeddedChannel$Builder.d.ts'
import type { EmbeddedChannel$State } from '../../../../io/netty/channel/embedded/EmbeddedChannel$State.d.ts'
import type { EmbeddedEventLoop$FreezableTicker } from '../../../../io/netty/channel/embedded/EmbeddedEventLoop$FreezableTicker.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class EmbeddedChannel extends AbstractChannel {
    static builder(): EmbeddedChannel$Builder;
    constructor()
    constructor(arg0: Channel, arg1: ChannelId, arg2: boolean, arg3: boolean, ...arg4: ChannelHandler[])
    constructor(arg0: ChannelId)
    constructor(arg0: ChannelId, ...arg1: ChannelHandler[])
    constructor(arg0: ChannelId, arg1: boolean, arg2: ChannelConfig, ...arg3: ChannelHandler[])
    constructor(arg0: ChannelId, arg1: boolean, ...arg2: ChannelHandler[])
    constructor(arg0: ChannelId, arg1: boolean, arg2: boolean, ...arg3: ChannelHandler[])
    constructor(arg0: EmbeddedChannel$Builder)
    constructor(...arg0: ChannelHandler[])
    constructor(arg0: boolean, ...arg1: ChannelHandler[])
    constructor(arg0: boolean, arg1: boolean, ...arg2: ChannelHandler[])
    // private cancelRemainingScheduledTasks: boolean;
    // private config: ChannelConfig;
    // private executingStackCnt: number;
    // private inboundMessages: Object[];
    // private lastException: Throwable;
    // private loop: (Object | null)[];
    // private metadata: ChannelMetadata;
    // private outboundMessages: Object[];
    // private recordExceptionListener: ChannelFutureListener;
    // private state: EmbeddedChannel$State;
    advanceTimeBy(arg0: number, arg1: TimeUnit): void;
    bind(arg0: SocketAddress): ChannelFuture;
    bind(arg0: SocketAddress, arg1: ChannelPromise): ChannelFuture;
    checkException(): void;
    // private checkException(arg0: ChannelPromise): ChannelFuture;
    // private checkOpen(arg0: boolean): boolean;
    close(): ChannelFuture;
    close(arg0: ChannelPromise): ChannelFuture;
    config(): ChannelConfig;
    connect(arg0: SocketAddress): ChannelFuture;
    connect(arg0: SocketAddress, arg1: ChannelPromise): ChannelFuture;
    connect(arg0: SocketAddress, arg1: SocketAddress): ChannelFuture;
    connect(arg0: SocketAddress, arg1: SocketAddress, arg2: ChannelPromise): ChannelFuture;
    deregister(): ChannelFuture;
    deregister(arg0: ChannelPromise): ChannelFuture;
    disconnect(): ChannelFuture;
    disconnect(arg0: ChannelPromise): ChannelFuture;
    doBeginRead(): void;
    doBind(arg0: SocketAddress): void;
    doClose(): void;
    doDisconnect(): void;
    doRegister(): void;
    doRegister(arg0: ChannelPromise): void;
    doWrite(arg0: ChannelOutboundBuffer): void;
    // private embeddedEventLoop(): (Object | null)[];
    ensureOpen(): void;
    finish(): boolean;
    // private finish(arg0: boolean): boolean;
    finishAndReleaseAll(): boolean;
    flush(): Channel;
    flushInbound(): EmbeddedChannel;
    // private flushInbound(arg0: boolean, arg1: ChannelPromise): ChannelFuture;
    flushOutbound(): EmbeddedChannel;
    // private flushOutbound0(): void;
    // private freezableTicker(): EmbeddedEventLoop$FreezableTicker;
    freezeTime(): void;
    handleInboundMessage(arg0: Object): void;
    handleOutboundMessage(arg0: Object): void;
    hasPendingTasks(): boolean;
    inboundMessages(): Object[];
    isActive(): boolean;
    isCompatible(arg0: (Object | null)[]): boolean;
    isOpen(): boolean;
    lastInboundBuffer(): Object[];
    lastOutboundBuffer(): Object[];
    localAddress0(): SocketAddress;
    // private maybeRunPendingTasks(): void;
    metadata(): ChannelMetadata;
    newChannelPipeline(): (Object | null)[];
    newUnsafe(): AbstractChannel$AbstractUnsafe;
    outboundMessages(): Object[];
    read(): Channel;
    readInbound<T extends unknown>(): T;
    readOutbound<T extends unknown>(): T;
    // private recordException(arg0: ChannelFuture): void;
    // private recordException(arg0: Throwable): void;
    register(): void;
    releaseInbound(): boolean;
    releaseOutbound(): boolean;
    remoteAddress0(): SocketAddress;
    runPendingTasks(): void;
    runScheduledPendingTasks(): number;
    // private setup(arg0: boolean, arg1: ChannelHandler): void;
    // private setup(arg0: boolean, ...arg1: ChannelHandler[]): void;
    unfreezeTime(): void;
    unsafe(): Channel$Unsafe;
    write(arg0: Object): ChannelFuture;
    write(arg0: Object, arg1: ChannelPromise): ChannelFuture;
    writeAndFlush(arg0: Object): ChannelFuture;
    writeAndFlush(arg0: Object, arg1: ChannelPromise): ChannelFuture;
    writeInbound(...arg0: Object[]): boolean;
    writeOneInbound(arg0: Object): ChannelFuture;
    writeOneInbound(arg0: Object, arg1: ChannelPromise): ChannelFuture;
    writeOneOutbound(arg0: Object): ChannelFuture;
    writeOneOutbound(arg0: Object, arg1: ChannelPromise): ChannelFuture;
    writeOutbound(...arg0: Object[]): boolean;
}