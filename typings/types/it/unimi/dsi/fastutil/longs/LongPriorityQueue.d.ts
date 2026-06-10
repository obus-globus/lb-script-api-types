import type { PriorityQueue } from '../../../../../it/unimi/dsi/fastutil/PriorityQueue.d.ts'
import type { LongComparator } from '../../../../../it/unimi/dsi/fastutil/longs/LongComparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface LongPriorityQueue extends PriorityQueue<number>, Object {
    changed(): void;
    comparator(): (param0: number, param1: number) => number;
    dequeue(): number;
    dequeueLong(): number;
    enqueue(arg0: number): void;
    first(): number;
    firstLong(): number;
    isEmpty(): boolean;
    last(): number;
    lastLong(): number;
}