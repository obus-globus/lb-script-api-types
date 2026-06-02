import type { Int2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ReferenceMap$Entry.d.ts'
import type { Int2ReferenceRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ReferenceRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ReferenceRBTreeMap$EntryIterator extends Int2ReferenceRBTreeMap$TreeIterator implements ObjectListIterator<Int2ReferenceMap$Entry<V>> {
    constructor(null_: Int2ReferenceRBTreeMap$EntryIterator)
    constructor(null_: Int2ReferenceRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Int2ReferenceMap$Entry<V>;
    previous(): Int2ReferenceMap$Entry<V>;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}