import type { PriorityQueue } from '../../../../../it/unimi/dsi/fastutil/PriorityQueue.d.ts'
import type { IntComparator } from '../../../../../it/unimi/dsi/fastutil/ints/IntComparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface IntPriorityQueue extends PriorityQueue<number>, Object{
    changed(): void;
    comparator(): (param0: number, param1: number) => kotlin.Int;
    dequeue(): number;
    dequeueInt(): number;
    enqueue(arg0: number): void;
    first(): number;
    firstInt(): number;
    isEmpty(): boolean;
    last<K extends Object | number | string | boolean>(): K;
    last(): number;
    lastInt(): number;
}