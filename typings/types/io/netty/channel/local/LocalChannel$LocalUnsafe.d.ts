import type { AbstractChannel$AbstractUnsafe } from '../../../../io/netty/channel/AbstractChannel$AbstractUnsafe.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { IoEvent } from '../../../../io/netty/channel/IoEvent.d.ts'
import type { IoRegistration } from '../../../../io/netty/channel/IoRegistration.d.ts'
import type { LocalIoHandle } from '../../../../io/netty/channel/local/LocalIoHandle.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { ClosedChannelException } from '../../../../java/nio/channels/ClosedChannelException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class LocalChannel$LocalUnsafe extends AbstractChannel$AbstractUnsafe implements LocalIoHandle {
    private constructor(null_: LocalChannel$LocalUnsafe)
    close(): void;
    close(arg0: ChannelPromise): void;
    close(arg0: ChannelPromise, arg1: Throwable, arg2: ClosedChannelException): void;
    closeNow(): void;
    connect(arg0: SocketAddress, arg1: SocketAddress, arg2: ChannelPromise): void;
    handle(arg0: IoRegistration, arg1: IoEvent): void;
    registered(): void;
    unregistered(): void;
}