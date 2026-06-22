import type { AbstractPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/AbstractPriorityQueue.d.ts'
import type { LongComparator } from '../../../../../it/unimi/dsi/fastutil/longs/LongComparator.d.ts'
import type { LongPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/longs/LongPriorityQueue.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
export abstract class AbstractLongPriorityQueue extends AbstractPriorityQueue<number> implements LongPriorityQueue, Serializable {
    constructor()
    comparator(): (param0: number, param1: number) => number;
    dequeue(): number;
    dequeueLong(): number;
    enqueue(arg0: number): void;
    first(): number;
    firstLong(): number;
    last(): number;
    lastLong(): number;
}