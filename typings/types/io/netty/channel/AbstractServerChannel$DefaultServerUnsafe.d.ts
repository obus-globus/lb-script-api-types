import type { AbstractServerChannel$1 } from '../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { AbstractChannel$AbstractUnsafe } from '../../../io/netty/channel/AbstractChannel$AbstractUnsafe.d.ts'
import type { AbstractServerChannel } from '../../../io/netty/channel/AbstractServerChannel.d.ts'
import type { ChannelPromise } from '../../../io/netty/channel/ChannelPromise.d.ts'
import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
export class AbstractServerChannel$DefaultServerUnsafe extends AbstractChannel$AbstractUnsafe {
    private constructor(null_: AbstractServerChannel)
    constructor(null_: AbstractServerChannel, arg1: AbstractServerChannel$1)
    connect(arg0: SocketAddress, arg1: SocketAddress, arg2: ChannelPromise): void;
}