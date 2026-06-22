import type { AbstractChannel$AbstractUnsafe } from '../../../../io/netty/channel/AbstractChannel$AbstractUnsafe.d.ts'
import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { IoEvent } from '../../../../io/netty/channel/IoEvent.d.ts'
import type { IoRegistration } from '../../../../io/netty/channel/IoRegistration.d.ts'
import type { AbstractNioChannel$NioUnsafe } from '../../../../io/netty/channel/nio/AbstractNioChannel$NioUnsafe.d.ts'
import type { NioIoHandle } from '../../../../io/netty/channel/nio/NioIoHandle.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { ClosedChannelException } from '../../../../java/nio/channels/ClosedChannelException.d.ts'
import type { SelectableChannel } from '../../../../java/nio/channels/SelectableChannel.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export abstract class AbstractNioChannel$AbstractNioUnsafe extends AbstractChannel$AbstractUnsafe implements AbstractNioChannel$NioUnsafe, NioIoHandle {
    constructor(null_: AbstractNioChannel$AbstractNioUnsafe)
    ch(): SelectableChannel;
    channel(): Channel;
    close(): void;
    close(arg0: ChannelPromise): void;
    close(arg0: ChannelPromise, arg1: Throwable, arg2: ClosedChannelException): void;
    connect(arg0: SocketAddress, arg1: SocketAddress, arg2: ChannelPromise): void;
    finishConnect(): void;
    flush0(): void;
    forceFlush(): void;
    // private fulfillConnectPromise(arg0: ChannelPromise, arg1: boolean): void;
    // private fulfillConnectPromise(arg0: ChannelPromise, arg1: Throwable): void;
    handle(arg0: IoRegistration, arg1: IoEvent): void;
    // private isFlushPending(): boolean;
    read(): void;
    removeReadOp(): void;
    selectableChannel(): SelectableChannel;
}