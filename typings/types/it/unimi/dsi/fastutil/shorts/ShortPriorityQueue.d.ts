import type { PriorityQueue } from '../../../../../it/unimi/dsi/fastutil/PriorityQueue.d.ts'
import type { ShortComparator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortComparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ShortPriorityQueue extends PriorityQueue<number>, Object {
    changed(): void;
    comparator(): (param0: number, param1: number) => kotlin.Int;
    dequeue(): number;
    dequeueShort(): number;
    enqueue(arg0: number): void;
    first(): number;
    firstShort(): number;
    isEmpty(): boolean;
    last<K extends Object | number | string | boolean>(): K;
    last(): number;
    lastShort(): number;
}