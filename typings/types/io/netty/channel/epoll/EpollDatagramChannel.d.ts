import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelFuture } from '../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelMetadata } from '../../../../io/netty/channel/ChannelMetadata.d.ts'
import type { ChannelOutboundBuffer } from '../../../../io/netty/channel/ChannelOutboundBuffer.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { AbstractEpollChannel } from '../../../../io/netty/channel/epoll/AbstractEpollChannel.d.ts'
import type { AbstractEpollChannel$AbstractEpollUnsafe } from '../../../../io/netty/channel/epoll/AbstractEpollChannel$AbstractEpollUnsafe.d.ts'
import type { EpollDatagramChannelConfig } from '../../../../io/netty/channel/epoll/EpollDatagramChannelConfig.d.ts'
import type { EpollRecvByteAllocatorHandle } from '../../../../io/netty/channel/epoll/EpollRecvByteAllocatorHandle.d.ts'
import type { LinuxSocket } from '../../../../io/netty/channel/epoll/LinuxSocket.d.ts'
import type { NativeDatagramPacketArray } from '../../../../io/netty/channel/epoll/NativeDatagramPacketArray.d.ts'
import type { DatagramChannel } from '../../../../io/netty/channel/socket/DatagramChannel.d.ts'
import type { InternetProtocolFamily } from '../../../../io/netty/channel/socket/InternetProtocolFamily.d.ts'
import type { SocketProtocolFamily } from '../../../../io/netty/channel/socket/SocketProtocolFamily.d.ts'
import type { Errors$NativeIoException } from '../../../../io/netty/channel/unix/Errors$NativeIoException.d.ts'
import type { IOException } from '../../../../java/io/IOException.d.ts'
import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { NetworkInterface } from '../../../../java/net/NetworkInterface.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EpollDatagramChannel extends AbstractEpollChannel implements DatagramChannel {
    static isSegmentedDatagramPacketSupported(): boolean;
    constructor()
    private constructor(arg0: LinuxSocket, arg1: boolean)
    constructor(arg0: InternetProtocolFamily)
    constructor(arg0: SocketProtocolFamily)
    constructor(arg0: number)
    // private config: EpollDatagramChannelConfig;
    readonly connected: boolean;
    block(arg0: InetAddress, arg1: InetAddress): ChannelFuture;
    block(arg0: InetAddress, arg1: InetAddress, arg2: ChannelPromise): ChannelFuture;
    block(arg0: InetAddress, arg1: NetworkInterface, arg2: InetAddress): ChannelFuture;
    block(arg0: InetAddress, arg1: NetworkInterface, arg2: InetAddress, arg3: ChannelPromise): ChannelFuture;
    // private cleanDatagramPacketArray(): NativeDatagramPacketArray;
    config(): EpollDatagramChannelConfig;
    // private connectedRead(arg0: EpollRecvByteAllocatorHandle, arg1: ByteBuf, arg2: number): boolean;
    doBind(arg0: SocketAddress): void;
    doClose(): void;
    doConnect(arg0: SocketAddress, arg1: SocketAddress): boolean;
    doDisconnect(): void;
    doRegister(): void;
    doRegister(arg0: ChannelPromise): void;
    doWrite(arg0: ChannelOutboundBuffer): void;
    // private doWriteMessage(arg0: Object): boolean;
    filterOutboundMessage(arg0: Object): Object;
    isActive(): boolean;
    isConnected(): boolean;
    joinGroup(arg0: InetAddress): ChannelFuture;
    joinGroup(arg0: InetAddress, arg1: ChannelPromise): ChannelFuture;
    joinGroup(arg0: InetAddress, arg1: NetworkInterface, arg2: InetAddress): ChannelFuture;
    joinGroup(arg0: InetAddress, arg1: NetworkInterface, arg2: InetAddress, arg3: ChannelPromise): ChannelFuture;
    joinGroup(arg0: InetSocketAddress, arg1: NetworkInterface): ChannelFuture;
    joinGroup(arg0: InetSocketAddress, arg1: NetworkInterface, arg2: ChannelPromise): ChannelFuture;
    // private joinGroup0(arg0: InetAddress, arg1: NetworkInterface, arg2: InetAddress, arg3: ChannelPromise): void;
    leaveGroup(arg0: InetAddress): ChannelFuture;
    leaveGroup(arg0: InetAddress, arg1: ChannelPromise): ChannelFuture;
    leaveGroup(arg0: InetAddress, arg1: NetworkInterface, arg2: InetAddress): ChannelFuture;
    leaveGroup(arg0: InetAddress, arg1: NetworkInterface, arg2: InetAddress, arg3: ChannelPromise): ChannelFuture;
    leaveGroup(arg0: InetSocketAddress, arg1: NetworkInterface): ChannelFuture;
    leaveGroup(arg0: InetSocketAddress, arg1: NetworkInterface, arg2: ChannelPromise): ChannelFuture;
    // private leaveGroup0(arg0: InetAddress, arg1: NetworkInterface, arg2: InetAddress, arg3: ChannelPromise): void;
    localAddress(): InetSocketAddress;
    metadata(): ChannelMetadata;
    newUnsafe(): AbstractEpollChannel$AbstractEpollUnsafe;
    // private recvmsg(arg0: EpollRecvByteAllocatorHandle, arg1: NativeDatagramPacketArray, arg2: ByteBuf): boolean;
    remoteAddress(): InetSocketAddress;
    // private scatteringRead(arg0: EpollRecvByteAllocatorHandle, arg1: NativeDatagramPacketArray, arg2: ByteBuf, arg3: number, arg4: number): boolean;
    // private translateForConnected(arg0: Errors$NativeIoException): IOException;
}