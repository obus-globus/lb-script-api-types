import type { PriorityQueue } from '../../../../../it/unimi/dsi/fastutil/PriorityQueue.d.ts'
import type { ByteComparator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteComparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BytePriorityQueue extends PriorityQueue<number>, Object{
    changed(): void;
    comparator(): (param0: number, param1: number) => kotlin.Int;
    dequeue(): number;
    dequeueByte(): number;
    enqueue(arg0: number): void;
    first(): number;
    firstByte(): number;
    isEmpty(): boolean;
    last<K extends Object | number | string | boolean>(): K;
    last(): number;
    lastByte(): number;
}