import type { Object2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongMap$Entry.d.ts'
import type { Object2LongRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2LongRBTreeMap$EntryIterator extends Object2LongRBTreeMap$TreeIterator implements ObjectListIterator<Object2LongMap$Entry<K>> {
    constructor(null_: Object2LongRBTreeMap$EntryIterator)
    constructor(null_: Object2LongRBTreeMap$EntryIterator)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Object2LongMap$Entry<K>;
    previous(): Object2LongMap$Entry<K>;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}