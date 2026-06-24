import type { KQueueDomainSocketChannel$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { AbstractKQueueStreamChannel$KQueueStreamUnsafe } from '../../../../io/netty/channel/kqueue/AbstractKQueueStreamChannel$KQueueStreamUnsafe.d.ts'
import type { KQueueDomainSocketChannel } from '../../../../io/netty/channel/kqueue/KQueueDomainSocketChannel.d.ts'
import type { KQueueRecvByteAllocatorHandle } from '../../../../io/netty/channel/kqueue/KQueueRecvByteAllocatorHandle.d.ts'
export class KQueueDomainSocketChannel$KQueueDomainUnsafe extends AbstractKQueueStreamChannel$KQueueStreamUnsafe {
    private constructor(null_: KQueueDomainSocketChannel)
    constructor(null_: KQueueDomainSocketChannel, arg1: KQueueDomainSocketChannel$1)
    readReady(arg0: KQueueRecvByteAllocatorHandle): void;
    // private readReadyFd(): void;
}