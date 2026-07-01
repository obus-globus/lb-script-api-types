import type { ObjectListIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ObjectLinkedOpenHashSet$SetIterator extends Object implements ObjectListIterator<K> {
    constructor(null_: Object[])
    constructor(null_: Object[], arg1: Object)
    // private curr: number;
    // private index: number;
    // private next: number;
    // private prev: number;
    add<K extends unknown>(arg0: K): void;
    // private ensureIndexKnown(): void;
    forEachRemaining<K extends unknown>(arg0: (param0: K) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next<K extends unknown>(): K;
    nextIndex(): number;
    previous<K extends unknown>(): K;
    previousIndex(): number;
    remove(): void;
    set<K extends unknown>(arg0: K): void;
}