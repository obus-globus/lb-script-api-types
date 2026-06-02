import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { AbstractChannel } from '../../../../io/netty/channel/AbstractChannel.d.ts'
import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { IoRegistration } from '../../../../io/netty/channel/IoRegistration.d.ts'
import type { AbstractNioChannel$NioUnsafe } from '../../../../io/netty/channel/nio/AbstractNioChannel$NioUnsafe.d.ts'
import type { NioIoOps } from '../../../../io/netty/channel/nio/NioIoOps.d.ts'
import type { ReferenceCounted } from '../../../../io/netty/util/ReferenceCounted.d.ts'
import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { SelectableChannel } from '../../../../java/nio/channels/SelectableChannel.d.ts'
import type { SelectionKey } from '../../../../java/nio/channels/SelectionKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractNioChannel extends AbstractChannel {
    constructor(arg0: Channel, arg1: SelectableChannel, arg2: NioIoOps)
    constructor(arg0: Channel, arg1: SelectableChannel, arg2: number)
    // private ch: SelectableChannel;
    // private clearReadPendingRunnable: () => void;
    // private connectPromise: ChannelPromise;
    // private connectTimeoutFuture: Future<Object>;
    // private readInterestOp: number;
    // private readOps: NioIoOps;
    // private readPending: boolean;
    // private registration: IoRegistration;
    // private requestedRemoteAddress: SocketAddress;
    addAndSubmit(arg0: NioIoOps): void;
    clearReadPending(): void;
    // private clearReadPending0(): void;
    doBeginRead(): void;
    doClose(): void;
    doConnect(arg0: SocketAddress, arg1: SocketAddress): boolean;
    doDeregister(): void;
    doFinishConnect(): void;
    doRegister(arg0: ChannelPromise): void;
    isCompatible(arg0: (Object | null)[]): boolean;
    isOpen(): boolean;
    isReadPending(): boolean;
    javaChannel(): SelectableChannel;
    newDirectBuffer(arg0: ByteBuf): ByteBuf;
    newDirectBuffer(arg0: ReferenceCounted, arg1: ByteBuf): ByteBuf;
    registration(): IoRegistration;
    removeAndSubmit(arg0: NioIoOps): void;
    selectionKey(): SelectionKey;
    setReadPending(arg0: boolean): void;
    // private setReadPending0(arg0: boolean): void;
    unsafe(): AbstractNioChannel$NioUnsafe;
}