import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { ObjectRBTreeSet$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectRBTreeSet$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectRBTreeSet$SetIterator extends Object implements ObjectListIterator<K> {
    constructor(null_: ObjectRBTreeSet$SetIterator)
    constructor(null_: ObjectRBTreeSet$SetIterator)
    // private curr: ObjectRBTreeSet$Entry<K>;
    // private index: number;
    // private next: ObjectRBTreeSet$Entry<K>;
    // private prev: ObjectRBTreeSet$Entry<K>;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next<K extends Object | number | string | boolean>(): K;
    nextEntry(): ObjectRBTreeSet$Entry<K>;
    nextIndex(): number;
    previous<K extends Object | number | string | boolean>(): K;
    previousEntry(): ObjectRBTreeSet$Entry<K>;
    previousIndex(): number;
    remove(): void;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
    updateNext(): void;
    updatePrevious(): void;
}