import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { ObjectRBTreeSet$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectRBTreeSet$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectRBTreeSet$SetIterator extends Object implements ObjectListIterator<K> {
    constructor(null_: K[])
    constructor(null_: K[], arg1: K)
    // private curr: ObjectRBTreeSet$Entry<K>;
    // private index: number;
    // private next: ObjectRBTreeSet$Entry<K>;
    // private prev: ObjectRBTreeSet$Entry<K>;
    add<K extends unknown>(arg0: K): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next<K extends unknown>(): K;
    nextEntry<K extends unknown>(): ObjectRBTreeSet$Entry<K>;
    nextIndex(): number;
    previous<K extends unknown>(): K;
    previousEntry<K extends unknown>(): ObjectRBTreeSet$Entry<K>;
    previousIndex(): number;
    remove(): void;
    set<K extends unknown>(arg0: K): void;
    updateNext(): void;
    updatePrevious(): void;
}