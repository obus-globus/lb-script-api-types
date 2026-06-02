import type { AbstractPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/AbstractPriorityQueue.d.ts'
import type { BytePriorityQueue } from '../../../../../it/unimi/dsi/fastutil/bytes/BytePriorityQueue.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
export abstract class AbstractBytePriorityQueue extends AbstractPriorityQueue<number> implements BytePriorityQueue, Serializable {
    constructor()
    dequeue(): number;
    enqueue(arg0: number): void;
    first(): number;
    last(): number;
    lastByte(): number;
}