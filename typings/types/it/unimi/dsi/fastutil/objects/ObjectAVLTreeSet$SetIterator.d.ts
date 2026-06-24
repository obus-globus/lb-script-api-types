import type { ObjectAVLTreeSet$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectAVLTreeSet$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectAVLTreeSet$SetIterator extends Object implements ObjectListIterator<K> {
    constructor(null_: K[])
    constructor(null_: K[], arg1: K)
    // private curr: ObjectAVLTreeSet$Entry<K>;
    // private index: number;
    // private next: ObjectAVLTreeSet$Entry<K>;
    // private prev: ObjectAVLTreeSet$Entry<K>;
    add<K extends unknown>(arg0: K): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next<K extends unknown>(): K;
    nextEntry<K extends unknown>(): ObjectAVLTreeSet$Entry<K>;
    nextIndex(): number;
    previous<K extends unknown>(): K;
    previousEntry<K extends unknown>(): ObjectAVLTreeSet$Entry<K>;
    previousIndex(): number;
    remove(): void;
    set<K extends unknown>(arg0: K): void;
    updateNext(): void;
    updatePrevious(): void;
}