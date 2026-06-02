import type { PriorityQueue } from '../../../../../it/unimi/dsi/fastutil/PriorityQueue.d.ts'
import type { DoubleComparator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleComparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DoublePriorityQueue extends PriorityQueue<number>, Object{
    changed(): void;
    comparator(): (param0: number, param1: number) => kotlin.Int;
    dequeue(): number;
    dequeueDouble(): number;
    enqueue(arg0: number): void;
    enqueue(arg0: number): void;
    first(): number;
    firstDouble(): number;
    isEmpty(): boolean;
    last<K extends Object | number | string | boolean>(): K;
    last(): number;
    lastDouble(): number;
}