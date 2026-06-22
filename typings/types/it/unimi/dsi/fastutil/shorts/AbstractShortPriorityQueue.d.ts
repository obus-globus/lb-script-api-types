import type { AbstractPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/AbstractPriorityQueue.d.ts'
import type { ShortComparator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortComparator.d.ts'
import type { ShortPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortPriorityQueue.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
export abstract class AbstractShortPriorityQueue extends AbstractPriorityQueue<number> implements ShortPriorityQueue, Serializable {
    constructor()
    comparator(): (param0: number, param1: number) => number;
    dequeue(): number;
    dequeueShort(): number;
    enqueue(arg0: number): void;
    first(): number;
    firstShort(): number;
    last(): number;
    lastShort(): number;
}