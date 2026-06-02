import type { AbstractAllocatorEvent } from '../../../io/netty/buffer/AbstractAllocatorEvent.d.ts'
import type { AbstractByteBufAllocator } from '../../../io/netty/buffer/AbstractByteBufAllocator.d.ts'
import type { ChunkInfo } from '../../../io/netty/buffer/ChunkInfo.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
export abstract class AbstractChunkEvent extends AbstractAllocatorEvent {
    constructor()
    address: number;
    capacity: number;
    direct: boolean;
    fill(arg0: ChunkInfo, arg1: Class<AbstractByteBufAllocator>): void;
}