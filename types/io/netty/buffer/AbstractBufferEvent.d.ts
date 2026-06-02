import type { AbstractAllocatorEvent } from '../../../io/netty/buffer/AbstractAllocatorEvent.d.ts'
import type { AbstractByteBuf } from '../../../io/netty/buffer/AbstractByteBuf.d.ts'
import type { AbstractByteBufAllocator } from '../../../io/netty/buffer/AbstractByteBufAllocator.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
export abstract class AbstractBufferEvent extends AbstractAllocatorEvent {
    constructor()
    address: number;
    direct: boolean;
    maxCapacity: number;
    maxFastCapacity: number;
    size: number;
    fill(arg0: AbstractByteBuf, arg1: Class<AbstractByteBufAllocator>): void;
}