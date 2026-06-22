import type { AbstractPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/AbstractPriorityQueue.d.ts'
import type { ByteComparator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteComparator.d.ts'
import type { BytePriorityQueue } from '../../../../../it/unimi/dsi/fastutil/bytes/BytePriorityQueue.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
export abstract class AbstractBytePriorityQueue extends AbstractPriorityQueue<number> implements BytePriorityQueue, Serializable {
    constructor()
    comparator(): (param0: number, param1: number) => number;
    dequeue(): number;
    dequeueByte(): number;
    enqueue(arg0: number): void;
    first(): number;
    firstByte(): number;
    last(): number;
    lastByte(): number;
}