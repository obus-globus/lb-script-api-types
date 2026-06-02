import type { Int2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharMap$Entry.d.ts'
import type { Int2CharRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2CharRBTreeMap$EntryIterator extends Int2CharRBTreeMap$TreeIterator implements ObjectListIterator<Int2CharMap$Entry> {
    constructor(null_: Int2CharRBTreeMap$EntryIterator)
    constructor(null_: Int2CharRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Int2CharMap$Entry;
    previous(): Int2CharMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}