import type { IndirectPriorityQueue } from '../../../../../com/viaversion/viaversion/libs/fastutil/IndirectPriorityQueue.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IndirectPriorityQueues$SynchronizedIndirectPriorityQueue<K extends unknown> extends Object implements IndirectPriorityQueue<K> {
    static serialVersionUID: number;
    constructor(arg0: IndirectPriorityQueue<K>)
    constructor(arg0: IndirectPriorityQueue<K>, arg1: Object)
    // private q: IndirectPriorityQueue<K>;
    // private sync: Object;
    allChanged(): void;
    changed(): void;
    changed(arg0: number): void;
    clear(): void;
    comparator(): (param0: Object) => boolean;
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