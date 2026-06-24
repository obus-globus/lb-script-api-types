import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandler } from '../../../../io/netty/channel/ChannelHandler.d.ts'
import type { AbstractKQueueChannel$AbstractKQueueUnsafe } from '../../../../io/netty/channel/kqueue/AbstractKQueueChannel$AbstractKQueueUnsafe.d.ts'
import type { AbstractKQueueStreamChannel } from '../../../../io/netty/channel/kqueue/AbstractKQueueStreamChannel.d.ts'
import type { KQueueRecvByteAllocatorHandle } from '../../../../io/netty/channel/kqueue/KQueueRecvByteAllocatorHandle.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class AbstractKQueueStreamChannel$KQueueStreamUnsafe extends AbstractKQueueChannel$AbstractKQueueUnsafe {
    constructor(null_: AbstractKQueueStreamChannel)
    // private handleReadException(arg0: Map$Entry<string, ChannelHandler>[], arg1: ByteBuf, arg2: Throwable, arg3: boolean, arg4: KQueueRecvByteAllocatorHandle): void;
    readReady(arg0: KQueueRecvByteAllocatorHandle): void;
}