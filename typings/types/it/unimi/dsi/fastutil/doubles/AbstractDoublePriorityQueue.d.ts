import type { AbstractPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/AbstractPriorityQueue.d.ts'
import type { DoublePriorityQueue } from '../../../../../it/unimi/dsi/fastutil/doubles/DoublePriorityQueue.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
export abstract class AbstractDoublePriorityQueue extends AbstractPriorityQueue<number> implements DoublePriorityQueue, Serializable {
    constructor()
    dequeue(): number;
    enqueue(arg0: number): void;
    first(): number;
    last(): number;
    lastDouble(): number;
}