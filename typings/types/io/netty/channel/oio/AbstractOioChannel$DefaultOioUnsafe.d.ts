import type { AbstractChannel$AbstractUnsafe } from '../../../../io/netty/channel/AbstractChannel$AbstractUnsafe.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { AbstractOioChannel } from '../../../../io/netty/channel/oio/AbstractOioChannel.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
export class AbstractOioChannel$DefaultOioUnsafe extends AbstractChannel$AbstractUnsafe {
    constructor(null_: AbstractOioChannel, arg1: () => void)
    connect(arg0: SocketAddress, arg1: SocketAddress, arg2: ChannelPromise): void;
}