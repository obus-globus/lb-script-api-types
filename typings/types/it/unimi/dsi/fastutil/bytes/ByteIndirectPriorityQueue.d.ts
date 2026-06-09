import type { IndirectPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/IndirectPriorityQueue.d.ts'
import type { ByteComparator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteComparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ByteIndirectPriorityQueue extends IndirectPriorityQueue<number>, Object {
    allChanged(): void;
    changed(): void;
    changed(arg0: number): void;
    comparator(): (param0: number, param1: number) => kotlin.Int;
    contains(arg0: number): boolean;
    front(arg0: number[]): number;
    isEmpty(): boolean;
    last(): number;
    remove(arg0: number): boolean;
}