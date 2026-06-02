import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IndirectPriorityQueue<K extends Object | number | string | boolean> extends Object{
    allChanged(): void;
    changed(): void;
    changed(arg0: number): void;
    clear(): void;
    comparator(): (param0: K) => kotlin.Boolean;
    contains(arg0: number): boolean;
    dequeue(): number;
    enqueue(arg0: number): void;
    first(): number;
    front(arg0: number[]): number;
    isEmpty(): boolean;
    last(): number;
    remove(arg0: number): boolean;
    size(): number;
}