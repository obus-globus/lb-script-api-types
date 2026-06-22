import type { AbstractPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/AbstractPriorityQueue.d.ts'
import type { FloatComparator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatComparator.d.ts'
import type { FloatPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/floats/FloatPriorityQueue.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
export abstract class AbstractFloatPriorityQueue extends AbstractPriorityQueue<number> implements FloatPriorityQueue, Serializable {
    constructor()
    comparator(): (param0: number, param1: number) => number;
    dequeue(): number;
    dequeueFloat(): number;
    enqueue(arg0: number): void;
    first(): number;
    firstFloat(): number;
    last(): number;
    lastFloat(): number;
}