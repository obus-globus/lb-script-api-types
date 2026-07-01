import type { AbstractKQueueStreamChannel$KQueueStreamUnsafe } from '../../../../io/netty/channel/kqueue/AbstractKQueueStreamChannel$KQueueStreamUnsafe.d.ts'
import type { KQueueDomainSocketChannel } from '../../../../io/netty/channel/kqueue/KQueueDomainSocketChannel.d.ts'
import type { KQueueRecvByteAllocatorHandle } from '../../../../io/netty/channel/kqueue/KQueueRecvByteAllocatorHandle.d.ts'
export class KQueueDomainSocketChannel$KQueueDomainUnsafe extends AbstractKQueueStreamChannel$KQueueStreamUnsafe {
    constructor(null_: KQueueDomainSocketChannel, arg1: any)
    readReady(arg0: KQueueRecvByteAllocatorHandle): void;
    // private readReadyFd(): void;
}