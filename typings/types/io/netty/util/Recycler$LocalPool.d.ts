import type { Recycler } from '../../../io/netty/util/Recycler.d.ts'
import type { MessagePassingQueue } from '../../../io/netty/util/internal/shaded/org/jctools/queues/MessagePassingQueue.d.ts'
import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class Recycler$LocalPool<H extends unknown, T extends unknown> extends Object {
    constructor(arg0: Thread, arg1: number, arg2: number, arg3: number)
    constructor(arg0: number)
    constructor(arg0: number, arg1: number, arg2: number)
    // private batch: H[];
    // private batchSize: number;
    // private owner: Thread;
    // private pooledHandles: MessagePassingQueue<H>;
    // private ratioCounter: number;
    // private ratioInterval: number;
    acquire(): H;
    canAllocatePooled(): boolean;
    getWith(arg0: Recycler<T>): T;
    release(arg0: H): void;
    size(): number;
}