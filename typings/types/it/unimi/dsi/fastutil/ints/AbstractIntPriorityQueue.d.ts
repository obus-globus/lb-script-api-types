import type { AbstractPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/AbstractPriorityQueue.d.ts'
import type { IntPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/ints/IntPriorityQueue.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
export abstract class AbstractIntPriorityQueue extends AbstractPriorityQueue<number> implements IntPriorityQueue, Serializable {
    constructor()
    dequeue(): number;
    enqueue(arg0: number): void;
    first(): number;
    last(): number;
    lastInt(): number;
}