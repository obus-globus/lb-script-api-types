import type { PriorityQueue } from '../../../../../it/unimi/dsi/fastutil/PriorityQueue.d.ts'
import type { FloatComparator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatComparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FloatPriorityQueue extends PriorityQueue<number>, Object {
    changed(): void;
    comparator(): (param0: number, param1: number) => kotlin.Int;
    dequeue(): number;
    dequeueFloat(): number;
    enqueue(arg0: number): void;
    first(): number;
    firstFloat(): number;
    isEmpty(): boolean;
    last<K extends Object | number | string | boolean>(): K;
    last(): number;
    lastFloat(): number;
}