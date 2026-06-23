import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { Channel$Unsafe } from '../../../../io/netty/channel/Channel$Unsafe.d.ts'
import type { ChannelFuture } from '../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelId } from '../../../../io/netty/channel/ChannelId.d.ts'
import type { ChannelMetadata } from '../../../../io/netty/channel/ChannelMetadata.d.ts'
import type { ChannelOption } from '../../../../io/netty/channel/ChannelOption.d.ts'
import type { ChannelProgressivePromise } from '../../../../io/netty/channel/ChannelProgressivePromise.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { DatagramChannelConfig } from '../../../../io/netty/channel/socket/DatagramChannelConfig.d.ts'
import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { NetworkInterface } from '../../../../java/net/NetworkInterface.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export interface DatagramChannel extends Channel, Object{
    alloc(): ByteBufAllocator;
    bind(arg0: SocketAddress): ChannelFuture;
    bind(arg0: SocketAddress, arg1: ChannelPromise): ChannelFuture;
    block(arg0: InetAddress, arg1: InetAddress): ChannelFuture;
    block(arg0: InetAddress, arg1: InetAddress, arg2: ChannelPromise): ChannelFuture;
    block(arg0: InetAddress, arg1: NetworkInterface, arg2: InetAddress): ChannelFuture;
    block(arg0: InetAddress, arg1: NetworkInterface, arg2: InetAddress, arg3: ChannelPromise): ChannelFuture;
    bytesBeforeUnwritable(): number;
    bytesBeforeWritable(): number;
    close(): ChannelFuture;
    close(arg0: ChannelPromise): ChannelFuture;
    closeFuture(): ChannelFuture;
    config(): DatagramChannelConfig;
    connect(arg0: SocketAddress): ChannelFuture;
    connect(arg0: SocketAddress, arg1: ChannelPromise): ChannelFuture;
    connect(arg0: SocketAddress, arg1: SocketAddress): ChannelFuture;
    connect(arg0: SocketAddress, arg1: SocketAddress, arg2: ChannelPromise): ChannelFuture;
    deregister(): ChannelFuture;
    deregister(arg0: ChannelPromise): ChannelFuture;
    disconnect(): ChannelFuture;
    disconnect(arg0: ChannelPromise): ChannelFuture;
    flush(): Channel;
    getOption<T extends unknown>(arg0: ChannelOption<T>): T;
    id(): ChannelId;
    isActive(): boolean;
    isConnected(): boolean;
    isOpen(): boolean;
    isRegistered(): boolean;
    isWritable(): boolean;
    joinGroup(arg0: InetAddress): ChannelFuture;
    joinGroup(arg0: InetAddress, arg1: ChannelPromise): ChannelFuture;
    joinGroup(arg0: InetAddress, arg1: NetworkInterface, arg2: InetAddress): ChannelFuture;
    joinGroup(arg0: InetAddress, arg1: NetworkInterface, arg2: InetAddress, arg3: ChannelPromise): ChannelFuture;
    joinGroup(arg0: InetSocketAddress, arg1: NetworkInterface): ChannelFuture;
    joinGroup(arg0: InetSocketAddress, arg1: NetworkInterface, arg2: ChannelPromise): ChannelFuture;
    leaveGroup(arg0: InetAddress): ChannelFuture;
    leaveGroup(arg0: InetAddress, arg1: ChannelPromise): ChannelFuture;
    leaveGroup(arg0: InetAddress, arg1: NetworkInterface, arg2: InetAddress): ChannelFuture;
    leaveGroup(arg0: InetAddress, arg1: NetworkInterface, arg2: InetAddress, arg3: ChannelPromise): ChannelFuture;
    leaveGroup(arg0: InetSocketAddress, arg1: NetworkInterface): ChannelFuture;
    leaveGroup(arg0: InetSocketAddress, arg1: NetworkInterface, arg2: ChannelPromise): ChannelFuture;
    localAddress(): InetSocketAddress;
    metadata(): ChannelMetadata;
    newFailedFuture(arg0: Throwable): ChannelFuture;
    newProgressivePromise(): ChannelProgressivePromise;
    newPromise(): ChannelPromise;
    newSucceededFuture(): ChannelFuture;
    parent(): Channel;
    read(): Channel;
    remoteAddress(): InetSocketAddress;
    setOption<T extends unknown>(arg0: ChannelOption<T>, arg1: T): boolean;
    unsafe(): Channel$Unsafe;
    voidPromise(): ChannelPromise;
    write(arg0: Object): ChannelFuture;
    write(arg0: Object, arg1: ChannelPromise): ChannelFuture;
    writeAndFlush(arg0: Object): ChannelFuture;
    writeAndFlush(arg0: Object, arg1: ChannelPromise): ChannelFuture;
}