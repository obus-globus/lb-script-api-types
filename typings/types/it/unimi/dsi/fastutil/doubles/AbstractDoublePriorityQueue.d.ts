import type { AbstractPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/AbstractPriorityQueue.d.ts'
import type { DoubleComparator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleComparator.d.ts'
import type { DoublePriorityQueue } from '../../../../../it/unimi/dsi/fastutil/doubles/DoublePriorityQueue.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
export abstract class AbstractDoublePriorityQueue extends AbstractPriorityQueue<number> implements DoublePriorityQueue, Serializable {
    constructor()
    comparator(): (param0: number, param1: number) => number;
    dequeue(): number;
    dequeueDouble(): number;
    enqueue(arg0: number): void;
    first(): number;
    firstDouble(): number;
    last(): number;
    lastDouble(): number;
}