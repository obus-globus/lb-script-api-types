import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { AbstractKQueueStreamChannel } from '../../../../io/netty/channel/kqueue/AbstractKQueueStreamChannel.d.ts'
import type { SocketWritableByteChannel } from '../../../../io/netty/channel/unix/SocketWritableByteChannel.d.ts'
export class AbstractKQueueStreamChannel$KQueueSocketWritableByteChannel extends SocketWritableByteChannel {
    constructor(null_: AbstractKQueueStreamChannel)
    alloc(): ByteBufAllocator;
}