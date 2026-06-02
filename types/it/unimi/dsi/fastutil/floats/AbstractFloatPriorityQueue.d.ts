import type { AbstractPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/AbstractPriorityQueue.d.ts'
import type { FloatPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/floats/FloatPriorityQueue.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
export abstract class AbstractFloatPriorityQueue extends AbstractPriorityQueue<number> implements FloatPriorityQueue, Serializable {
    constructor()
    dequeue(): number;
    enqueue(arg0: number): void;
    first(): number;
    last(): number;
    lastFloat(): number;
}