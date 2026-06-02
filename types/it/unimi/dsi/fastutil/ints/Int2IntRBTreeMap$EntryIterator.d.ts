import type { Int2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2IntMap$Entry.d.ts'
import type { Int2IntRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2IntRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2IntRBTreeMap$EntryIterator extends Int2IntRBTreeMap$TreeIterator implements ObjectListIterator<Int2IntMap$Entry> {
    constructor(null_: Int2IntRBTreeMap$EntryIterator)
    constructor(null_: Int2IntRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Int2IntMap$Entry;
    previous(): Int2IntMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}