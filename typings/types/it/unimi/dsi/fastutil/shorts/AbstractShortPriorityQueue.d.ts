import type { AbstractPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/AbstractPriorityQueue.d.ts'
import type { ShortPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortPriorityQueue.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
export abstract class AbstractShortPriorityQueue extends AbstractPriorityQueue<number> implements ShortPriorityQueue, Serializable {
    constructor()
    dequeue(): number;
    enqueue(arg0: number): void;
    first(): number;
    last(): number;
    lastShort(): number;
}