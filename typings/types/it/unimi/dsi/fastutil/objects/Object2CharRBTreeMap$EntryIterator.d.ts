import type { Object2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharMap$Entry.d.ts'
import type { Object2CharRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2CharRBTreeMap$EntryIterator extends Object2CharRBTreeMap$TreeIterator implements ObjectListIterator<Object2CharMap$Entry<K>> {
    constructor(null_: Object2CharRBTreeMap$EntryIterator)
    constructor(null_: Object2CharRBTreeMap$EntryIterator)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Object2CharMap$Entry<K>;
    previous(): Object2CharMap$Entry<K>;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}