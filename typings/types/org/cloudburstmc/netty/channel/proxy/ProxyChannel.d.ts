import type { ByteBufAllocator } from '../../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { Channel } from '../../../../../io/netty/channel/Channel.d.ts'
import type { Channel$Unsafe } from '../../../../../io/netty/channel/Channel$Unsafe.d.ts'
import type { ChannelConfig } from '../../../../../io/netty/channel/ChannelConfig.d.ts'
import type { ChannelFuture } from '../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelHandler } from '../../../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelId } from '../../../../../io/netty/channel/ChannelId.d.ts'
import type { ChannelMetadata } from '../../../../../io/netty/channel/ChannelMetadata.d.ts'
import type { ChannelOption } from '../../../../../io/netty/channel/ChannelOption.d.ts'
import type { ChannelProgressivePromise } from '../../../../../io/netty/channel/ChannelProgressivePromise.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { Attribute } from '../../../../../io/netty/util/Attribute.d.ts'
import type { AttributeKey } from '../../../../../io/netty/util/AttributeKey.d.ts'
import type { InetSocketAddress } from '../../../../../java/net/InetSocketAddress.d.ts'
import type { SocketAddress } from '../../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export abstract class ProxyChannel<T extends Channel> extends Object implements Channel {
    constructor(arg0: T)
    // private channel: T;
    // private pipeline: Map$Entry<string, ChannelHandler>[];
    alloc(): ByteBufAllocator;
    attr<U extends unknown>(arg0: AttributeKey<U>): Attribute<U>;
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
    correctPromise(arg0: ChannelPromise): ChannelPromise;
    deregister(): ChannelFuture;
    deregister(arg0: ChannelPromise): ChannelFuture;
    disconnect(): ChannelFuture;
    disconnect(arg0: ChannelPromise): ChannelFuture;
    eventLoop(): (Object | null)[];
    flush(): Channel;
    getOption(arg0: ChannelOption<T>): T;
    hasAttr<U extends unknown>(arg0: AttributeKey<U>): boolean;
    id(): ChannelId;
    internalPipeline(): Map$Entry<string, ChannelHandler>[];
    isActive(): boolean;
    isOpen(): boolean;
    isRegistered(): boolean;
    isWritable(): boolean;
    localAddress(): InetSocketAddress;
    metadata(): ChannelMetadata;
    newChannelPipeline(): (Object | null)[];
    newFailedFuture(arg0: Throwable): ChannelFuture;
    newProgressivePromise(): ChannelProgressivePromise;
    newPromise(): ChannelPromise;
    newSucceededFuture(): ChannelFuture;
    onCloseTriggered(arg0: ChannelPromise): void;
    parent(): Channel;
    pipeline(): Map$Entry<string, ChannelHandler>[];
    read(): Channel;
    remoteAddress(): InetSocketAddress;
    setOption(arg0: ChannelOption<T>, arg1: T): boolean;
    unsafe(): Channel$Unsafe;
    voidPromise(): ChannelPromise;
    write(arg0: Object): ChannelFuture;
    write(arg0: Object, arg1: ChannelPromise): ChannelFuture;
    writeAndFlush(arg0: Object): ChannelFuture;
    writeAndFlush(arg0: Object, arg1: ChannelPromise): ChannelFuture;
}