import type { AbstractKQueueChannel$AbstractKQueueUnsafe } from '../../../../io/netty/channel/kqueue/AbstractKQueueChannel$AbstractKQueueUnsafe.d.ts'
import type { AbstractKQueueServerChannel } from '../../../../io/netty/channel/kqueue/AbstractKQueueServerChannel.d.ts'
import type { KQueueRecvByteAllocatorHandle } from '../../../../io/netty/channel/kqueue/KQueueRecvByteAllocatorHandle.d.ts'
export class AbstractKQueueServerChannel$KQueueServerSocketUnsafe extends AbstractKQueueChannel$AbstractKQueueUnsafe {
    constructor(null_: AbstractKQueueServerChannel)
    // private acceptedAddress: number[];
    readReady(arg0: KQueueRecvByteAllocatorHandle): void;
}