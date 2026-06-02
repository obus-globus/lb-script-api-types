import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { AbstractChannel } from '../../../../io/netty/channel/AbstractChannel.d.ts'
import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { ChannelConfig } from '../../../../io/netty/channel/ChannelConfig.d.ts'
import type { ChannelMetadata } from '../../../../io/netty/channel/ChannelMetadata.d.ts'
import type { ChannelOutboundBuffer } from '../../../../io/netty/channel/ChannelOutboundBuffer.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { IoRegistration } from '../../../../io/netty/channel/IoRegistration.d.ts'
import type { AbstractKQueueChannel$AbstractKQueueUnsafe } from '../../../../io/netty/channel/kqueue/AbstractKQueueChannel$AbstractKQueueUnsafe.d.ts'
import type { BsdSocket } from '../../../../io/netty/channel/kqueue/BsdSocket.d.ts'
import type { KQueueChannelConfig } from '../../../../io/netty/channel/kqueue/KQueueChannelConfig.d.ts'
import type { KQueueIoOps } from '../../../../io/netty/channel/kqueue/KQueueIoOps.d.ts'
import type { FileDescriptor } from '../../../../io/netty/channel/unix/FileDescriptor.d.ts'
import type { UnixChannel } from '../../../../io/netty/channel/unix/UnixChannel.d.ts'
import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractKQueueChannel extends AbstractChannel implements UnixChannel {
    constructor(arg0: Channel, arg1: BsdSocket, arg2: SocketAddress)
    constructor(arg0: Channel, arg1: BsdSocket, arg2: boolean)
    active: boolean;
    // private connectPromise: ChannelPromise;
    // private connectTimeoutFuture: Future<Object>;
    // private inputClosedSeenErrorOnRead: boolean;
    // private local: SocketAddress;
    // private readFilterEnabled: boolean;
    // private readReadyRunnablePending: boolean;
    // private registration: IoRegistration;
    // private remote: SocketAddress;
    // private requestedRemoteAddress: SocketAddress;
    // private socket: BsdSocket;
    // private writeFilterEnabled: boolean;
    // private clearRdHup0(): void;
    clearReadFilter(): void;
    config(): KQueueChannelConfig;
    doBeginRead(): void;
    doBind(arg0: SocketAddress): void;
    doClose(): void;
    doConnect(arg0: SocketAddress, arg1: SocketAddress): boolean;
    doConnect0(arg0: SocketAddress, arg1: SocketAddress): boolean;
    doDeregister(): void;
    doDisconnect(): void;
    doReadBytes(arg0: ByteBuf): number;
    doRegister(arg0: ChannelPromise): void;
    doWriteBytes(arg0: ChannelOutboundBuffer, arg1: ByteBuf): number;
    fd(): FileDescriptor;
    isActive(): boolean;
    isCompatible(arg0: (Object | null)[]): boolean;
    isOpen(): boolean;
    localAddress0(): SocketAddress;
    metadata(): ChannelMetadata;
    newDirectBuffer(arg0: ByteBuf): ByteBuf;
    newDirectBuffer(arg0: Object, arg1: ByteBuf): ByteBuf;
    newUnsafe(): AbstractKQueueChannel$AbstractKQueueUnsafe;
    readFilter(arg0: boolean): void;
    registration(): IoRegistration;
    remoteAddress0(): SocketAddress;
    resetCachedAddresses(): void;
    shouldBreakReadReady(arg0: ChannelConfig): boolean;
    // private submit(arg0: KQueueIoOps): void;
    writeFilter(arg0: boolean): void;
}