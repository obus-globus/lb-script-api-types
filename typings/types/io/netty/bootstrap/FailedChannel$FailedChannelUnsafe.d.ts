import type { FailedChannel } from '../../../io/netty/bootstrap/FailedChannel.d.ts'
import type { AbstractChannel$AbstractUnsafe } from '../../../io/netty/channel/AbstractChannel$AbstractUnsafe.d.ts'
import type { ChannelPromise } from '../../../io/netty/channel/ChannelPromise.d.ts'
import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
export class FailedChannel$FailedChannelUnsafe extends AbstractChannel$AbstractUnsafe {
    constructor(null_: FailedChannel, arg1: any)
    connect(arg0: SocketAddress, arg1: SocketAddress, arg2: ChannelPromise): void;
}