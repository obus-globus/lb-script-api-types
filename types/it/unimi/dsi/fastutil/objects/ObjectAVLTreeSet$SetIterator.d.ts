import type { ObjectAVLTreeSet$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectAVLTreeSet$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectAVLTreeSet$SetIterator extends Object implements ObjectListIterator<K> {
    constructor(null_: ObjectAVLTreeSet$SetIterator)
    constructor(null_: ObjectAVLTreeSet$SetIterator)
    // private curr: ObjectAVLTreeSet$Entry<K>;
    // private index: number;
    // private next: ObjectAVLTreeSet$Entry<K>;
    // private prev: ObjectAVLTreeSet$Entry<K>;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next<K extends Object | number | string | boolean>(): K;
    nextEntry(): ObjectAVLTreeSet$Entry<K>;
    nextIndex(): number;
    previous<K extends Object | number | string | boolean>(): K;
    previousEntry(): ObjectAVLTreeSet$Entry<K>;
    previousIndex(): number;
    remove(): void;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
    updateNext(): void;
    updatePrevious(): void;
}