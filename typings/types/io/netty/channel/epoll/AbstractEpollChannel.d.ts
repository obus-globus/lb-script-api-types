import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { AbstractChannel } from '../../../../io/netty/channel/AbstractChannel.d.ts'
import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { ChannelConfig } from '../../../../io/netty/channel/ChannelConfig.d.ts'
import type { ChannelMetadata } from '../../../../io/netty/channel/ChannelMetadata.d.ts'
import type { ChannelOutboundBuffer } from '../../../../io/netty/channel/ChannelOutboundBuffer.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { IoRegistration } from '../../../../io/netty/channel/IoRegistration.d.ts'
import type { AbstractEpollChannel$AbstractEpollUnsafe } from '../../../../io/netty/channel/epoll/AbstractEpollChannel$AbstractEpollUnsafe.d.ts'
import type { EpollChannelConfig } from '../../../../io/netty/channel/epoll/EpollChannelConfig.d.ts'
import type { EpollIoOps } from '../../../../io/netty/channel/epoll/EpollIoOps.d.ts'
import type { LinuxSocket } from '../../../../io/netty/channel/epoll/LinuxSocket.d.ts'
import type { FileDescriptor } from '../../../../io/netty/channel/unix/FileDescriptor.d.ts'
import type { UnixChannel } from '../../../../io/netty/channel/unix/UnixChannel.d.ts'
import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractEpollChannel extends AbstractChannel implements UnixChannel {
    constructor(arg0: Channel, arg1: LinuxSocket, arg2: SocketAddress, arg3: EpollIoOps)
    constructor(arg0: Channel, arg1: LinuxSocket, arg2: boolean, arg3: EpollIoOps)
    active: boolean;
    // private connectPromise: ChannelPromise;
    // private connectTimeoutFuture: Future<Object>;
    // private inital: EpollIoOps;
    // private inputClosedSeenErrorOnRead: boolean;
    // private local: SocketAddress;
    // private ops: EpollIoOps;
    // private registration: IoRegistration;
    // private remote: SocketAddress;
    // private requestedRemoteAddress: SocketAddress;
    // private socket: LinuxSocket;
    clearEpollIn(): void;
    clearFlag(arg0: number): void;
    config(): EpollChannelConfig;
    doBeginRead(): void;
    doBind(arg0: SocketAddress): void;
    doClose(): void;
    doConnect(arg0: SocketAddress, arg1: SocketAddress): boolean;
    doConnect0(arg0: SocketAddress): boolean;
    doDeregister(): void;
    doDisconnect(): void;
    doReadBytes(arg0: ByteBuf): number;
    doRegister(): void;
    doRegister(arg0: ChannelPromise): void;
    doWriteBytes(arg0: ChannelOutboundBuffer, arg1: ByteBuf): number;
    doWriteOrSendBytes(arg0: ByteBuf, arg1: InetSocketAddress, arg2: boolean): number;
    fd(): FileDescriptor;
    isActive(): boolean;
    isCompatible(arg0: (Object | null)[]): boolean;
    isFlagSet(arg0: number): boolean;
    isOpen(): boolean;
    localAddress0(): SocketAddress;
    metadata(): ChannelMetadata;
    newDirectBuffer(arg0: ByteBuf): ByteBuf;
    newDirectBuffer(arg0: Object, arg1: ByteBuf): ByteBuf;
    newUnsafe(): AbstractEpollChannel$AbstractEpollUnsafe;
    registration(): IoRegistration;
    remoteAddress0(): SocketAddress;
    resetCachedAddresses(): void;
    setFlag(arg0: number): void;
    shouldBreakEpollInReady(arg0: ChannelConfig): boolean;
}