import type { ByteBufAllocator } from '../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { AbstractChannel$AbstractUnsafe } from '../../../io/netty/channel/AbstractChannel$AbstractUnsafe.d.ts'
import type { AbstractChannel$CloseFuture } from '../../../io/netty/channel/AbstractChannel$CloseFuture.d.ts'
import type { Channel } from '../../../io/netty/channel/Channel.d.ts'
import type { Channel$Unsafe } from '../../../io/netty/channel/Channel$Unsafe.d.ts'
import type { ChannelConfig } from '../../../io/netty/channel/ChannelConfig.d.ts'
import type { ChannelFuture } from '../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelHandler } from '../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelId } from '../../../io/netty/channel/ChannelId.d.ts'
import type { ChannelMetadata } from '../../../io/netty/channel/ChannelMetadata.d.ts'
import type { ChannelOption } from '../../../io/netty/channel/ChannelOption.d.ts'
import type { ChannelOutboundBuffer } from '../../../io/netty/channel/ChannelOutboundBuffer.d.ts'
import type { ChannelProgressivePromise } from '../../../io/netty/channel/ChannelProgressivePromise.d.ts'
import type { ChannelPromise } from '../../../io/netty/channel/ChannelPromise.d.ts'
import type { DefaultFileRegion } from '../../../io/netty/channel/DefaultFileRegion.d.ts'
import type { VoidChannelPromise } from '../../../io/netty/channel/VoidChannelPromise.d.ts'
import type { DefaultAttributeMap } from '../../../io/netty/util/DefaultAttributeMap.d.ts'
import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export abstract class AbstractChannel extends DefaultAttributeMap implements Channel {
    constructor(arg0: Channel)
    constructor(arg0: Channel, arg1: ChannelId)
    // private closeFuture: AbstractChannel$CloseFuture;
    // private closeInitiated: boolean;
    // private eventLoop: (Object | null)[];
    // private id: ChannelId;
    // private initialCloseCause: Throwable;
    // private localAddress: SocketAddress;
    // private parent: Channel;
    // private pipeline: (Object | null)[];
    readonly registered: boolean;
    // private remoteAddress: SocketAddress;
    // private strVal: string;
    // private strValActive: boolean;
    // private unsafe: Channel$Unsafe;
    // private unsafeVoidPromise: VoidChannelPromise;
    alloc(): ByteBufAllocator;
    bind(arg0: SocketAddress): ChannelFuture;
    bind(arg0: SocketAddress, arg1: ChannelPromise): ChannelFuture;
    bytesBeforeUnwritable(): number;
    bytesBeforeWritable(): number;
    close(): ChannelFuture;
    close(arg0: ChannelPromise): ChannelFuture;
    closeFuture(): ChannelFuture;
    compareTo(arg0: Channel): number;
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
    doDeregister(): void;
    doDisconnect(): void;
    doRegister(): void;
    doRegister(arg0: ChannelPromise): void;
    doShutdownOutput(): void;
    doWrite(arg0: ChannelOutboundBuffer): void;
    equals(arg0: Object | null): boolean;
    eventLoop(): (Object | null)[];
    filterOutboundMessage(arg0: Object): Object;
    flush(): Channel;
    getOption<T extends Object | number | string | boolean>(arg0: ChannelOption<T>): T;
    hashCode(): number;
    id(): ChannelId;
    invalidateLocalAddress(): void;
    invalidateRemoteAddress(): void;
    isActive(): boolean;
    isCompatible(arg0: (Object | null)[]): boolean;
    isOpen(): boolean;
    isRegistered(): boolean;
    isWritable(): boolean;
    localAddress(): SocketAddress;
    localAddress0(): SocketAddress;
    maxMessagesPerWrite(): number;
    metadata(): ChannelMetadata;
    newChannelPipeline(): (Object | null)[];
    newFailedFuture(arg0: Throwable): ChannelFuture;
    newId(): ChannelId;
    newProgressivePromise(): ChannelProgressivePromise;
    newPromise(): ChannelPromise;
    newSucceededFuture(): ChannelFuture;
    newUnsafe(): AbstractChannel$AbstractUnsafe;
    parent(): Channel;
    pipeline(): Map$Entry<string, ChannelHandler>[];
    read(): Channel;
    remoteAddress(): SocketAddress;
    remoteAddress0(): SocketAddress;
    setOption<T extends Object | number | string | boolean>(arg0: ChannelOption<T>, arg1: T): boolean;
    toString(): string;
    unsafe(): Channel$Unsafe;
    validateFileRegion(arg0: DefaultFileRegion, arg1: number): void;
    voidPromise(): ChannelPromise;
    write(arg0: Object): ChannelFuture;
    write(arg0: Object, arg1: ChannelPromise): ChannelFuture;
    writeAndFlush(arg0: Object): ChannelFuture;
    writeAndFlush(arg0: Object, arg1: ChannelPromise): ChannelFuture;
}