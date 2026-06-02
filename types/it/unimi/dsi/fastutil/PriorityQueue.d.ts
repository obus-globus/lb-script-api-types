import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface PriorityQueue<K extends Object | number | string | boolean> extends Object{
    changed(): void;
    clear(): void;
    comparator(): (param0: K) => kotlin.Boolean;
    dequeue(): K;
    enqueue(arg0: K): void;
    first(): K;
    isEmpty(): boolean;
    last(): K;
    size(): number;
}