import type { Object2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortMap$Entry.d.ts'
import type { Object2ShortRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ShortRBTreeMap$EntryIterator extends Object2ShortRBTreeMap$TreeIterator implements ObjectListIterator<Object2ShortMap$Entry<K>> {
    constructor(null_: Object2ShortRBTreeMap$EntryIterator)
    constructor(null_: Object2ShortRBTreeMap$EntryIterator)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Object2ShortMap$Entry<K>;
    previous(): Object2ShortMap$Entry<K>;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}