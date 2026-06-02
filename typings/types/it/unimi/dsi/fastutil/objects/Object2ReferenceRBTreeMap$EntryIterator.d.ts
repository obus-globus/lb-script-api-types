import type { Object2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceMap$Entry.d.ts'
import type { Object2ReferenceRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ReferenceRBTreeMap$EntryIterator extends Object2ReferenceRBTreeMap$TreeIterator implements ObjectListIterator<Object2ReferenceMap$Entry<K, V>> {
    constructor(null_: Object2ReferenceRBTreeMap$EntryIterator)
    constructor(null_: Object2ReferenceRBTreeMap$EntryIterator)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Object2ReferenceMap$Entry<K, V>;
    previous(): Object2ReferenceMap$Entry<K, V>;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}