import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface PriorityQueue<K extends unknown> extends Object {
    changed(): void;
    clear(): void;
    comparator(): (param0: Object) => boolean;
    dequeue(): K;
    enqueue(arg0: K): void;
    first(): K;
    isEmpty(): boolean;
    last(): K;
    size(): number;
}