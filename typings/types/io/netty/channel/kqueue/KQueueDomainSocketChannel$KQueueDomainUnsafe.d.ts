import type { AbstractKQueueStreamChannel$KQueueStreamUnsafe } from '../../../../io/netty/channel/kqueue/AbstractKQueueStreamChannel$KQueueStreamUnsafe.d.ts'
import type { KQueueDomainSocketChannel } from '../../../../io/netty/channel/kqueue/KQueueDomainSocketChannel.d.ts'
import type { KQueueRecvByteAllocatorHandle } from '../../../../io/netty/channel/kqueue/KQueueRecvByteAllocatorHandle.d.ts'
export class KQueueDomainSocketChannel$KQueueDomainUnsafe extends AbstractKQueueStreamChannel$KQueueStreamUnsafe {
    private constructor(null_: KQueueDomainSocketChannel)
    readReady(arg0: KQueueRecvByteAllocatorHandle): void;
    // private readReadyFd(): void;
}