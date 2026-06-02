import type { AbstractByteBufAllocator } from '../../../io/netty/buffer/AbstractByteBufAllocator.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Event } from '../../../jdk/jfr/Event.d.ts'
export abstract class AbstractAllocatorEvent extends Event {
    constructor()
    allocatorType: Class<AbstractByteBufAllocator>;
}