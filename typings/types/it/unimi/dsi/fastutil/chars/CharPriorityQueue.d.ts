import type { PriorityQueue } from '../../../../../it/unimi/dsi/fastutil/PriorityQueue.d.ts'
import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CharPriorityQueue extends PriorityQueue<string>, Object {
    changed(): void;
    comparator(): (param0: string, param1: string) => number;
    dequeue(): string;
    dequeueChar(): string;
    enqueue(arg0: string): void;
    first(): string;
    firstChar(): string;
    isEmpty(): boolean;
    last(): string;
    lastChar(): string;
}