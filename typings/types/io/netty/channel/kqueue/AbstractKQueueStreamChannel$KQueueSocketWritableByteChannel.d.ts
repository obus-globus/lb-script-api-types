import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { SocketWritableByteChannel } from '../../../../io/netty/channel/unix/SocketWritableByteChannel.d.ts'
export class AbstractKQueueStreamChannel$KQueueSocketWritableByteChannel extends SocketWritableByteChannel {
    constructor(null_: AbstractKQueueStreamChannel$KQueueSocketWritableByteChannel)
    alloc(): ByteBufAllocator;
}