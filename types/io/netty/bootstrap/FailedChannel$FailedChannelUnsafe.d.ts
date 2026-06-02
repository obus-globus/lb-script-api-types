import type { AbstractChannel$AbstractUnsafe } from '../../../io/netty/channel/AbstractChannel$AbstractUnsafe.d.ts'
import type { ChannelPromise } from '../../../io/netty/channel/ChannelPromise.d.ts'
import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
export class FailedChannel$FailedChannelUnsafe extends AbstractChannel$AbstractUnsafe {
    private constructor(null_: FailedChannel$FailedChannelUnsafe)
    connect(arg0: SocketAddress, arg1: SocketAddress, arg2: ChannelPromise): void;
}