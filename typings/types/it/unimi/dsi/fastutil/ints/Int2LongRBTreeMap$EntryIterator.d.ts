import type { Int2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongMap$Entry.d.ts'
import type { Int2LongRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2LongRBTreeMap$EntryIterator extends Int2LongRBTreeMap$TreeIterator implements ObjectListIterator<Int2LongMap$Entry> {
    constructor(null_: Int2LongRBTreeMap$EntryIterator)
    constructor(null_: Int2LongRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Int2LongMap$Entry;
    previous(): Int2LongMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}