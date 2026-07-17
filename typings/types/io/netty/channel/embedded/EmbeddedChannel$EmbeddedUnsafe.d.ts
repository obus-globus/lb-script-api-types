import type { AbstractChannel$AbstractUnsafe } from '../../../../io/netty/channel/AbstractChannel$AbstractUnsafe.d.ts'
import type { Channel$Unsafe } from '../../../../io/netty/channel/Channel$Unsafe.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { EmbeddedChannel } from '../../../../io/netty/channel/embedded/EmbeddedChannel.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
export class EmbeddedChannel$EmbeddedUnsafe extends AbstractChannel$AbstractUnsafe {
    private constructor(null_: EmbeddedChannel)
    // private wrapped: Channel$Unsafe;
    connect(arg0: SocketAddress, arg1: SocketAddress, arg2: ChannelPromise): void;
}