import type { ObjectHeapSemiIndirectPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectHeapSemiIndirectPriorityQueue.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectHeapIndirectPriorityQueue<K extends Object | number | string | boolean> extends ObjectHeapSemiIndirectPriorityQueue<K> {
    constructor(arg0: K[])
    constructor(arg0: K[], arg1: (param0: K) => kotlin.Boolean)
    constructor(arg0: K[], arg1: number)
    constructor(arg0: K[], arg1: number, arg2: (param0: K) => kotlin.Boolean)
    constructor(arg0: K[], arg1: number[])
    constructor(arg0: K[], arg1: number[], arg2: (param0: K) => kotlin.Boolean)
    constructor(arg0: K[], arg1: number[], arg2: number)
    constructor(arg0: K[], arg1: number[], arg2: number, arg3: (param0: K) => kotlin.Boolean)
    // private inv: number[];
    allChanged(): void;
    changed(): void;
    changed(arg0: number): void;
    clear(): void;
    contains(arg0: number): boolean;
    dequeue(): number;
    enqueue(arg0: number): void;
    remove(arg0: number): boolean;
}