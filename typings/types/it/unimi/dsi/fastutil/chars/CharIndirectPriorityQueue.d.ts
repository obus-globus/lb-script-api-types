import type { IndirectPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/IndirectPriorityQueue.d.ts'
import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CharIndirectPriorityQueue extends IndirectPriorityQueue<string>, Object {
    allChanged(): void;
    changed(): void;
    changed(arg0: number): void;
    comparator(): (param0: string, param1: string) => kotlin.Int;
    contains(arg0: number): boolean;
    front(arg0: number[]): number;
    isEmpty(): boolean;
    last(): number;
    remove(arg0: number): boolean;
}