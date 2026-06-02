import type { Int2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2DoubleMap$Entry.d.ts'
import type { Int2DoubleRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2DoubleRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2DoubleRBTreeMap$EntryIterator extends Int2DoubleRBTreeMap$TreeIterator implements ObjectListIterator<Int2DoubleMap$Entry> {
    constructor(null_: Int2DoubleRBTreeMap$EntryIterator)
    constructor(null_: Int2DoubleRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Int2DoubleMap$Entry;
    previous(): Int2DoubleMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}