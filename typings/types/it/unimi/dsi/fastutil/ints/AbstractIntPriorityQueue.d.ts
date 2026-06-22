import type { AbstractPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/AbstractPriorityQueue.d.ts'
import type { IntComparator } from '../../../../../it/unimi/dsi/fastutil/ints/IntComparator.d.ts'
import type { IntPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/ints/IntPriorityQueue.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
export abstract class AbstractIntPriorityQueue extends AbstractPriorityQueue<number> implements IntPriorityQueue, Serializable {
    constructor()
    comparator(): (param0: number, param1: number) => number;
    dequeue(): number;
    dequeueInt(): number;
    enqueue(arg0: number): void;
    first(): number;
    firstInt(): number;
    last(): number;
    lastInt(): number;
}