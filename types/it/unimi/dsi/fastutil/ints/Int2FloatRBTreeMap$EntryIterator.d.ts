import type { Int2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatMap$Entry.d.ts'
import type { Int2FloatRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2FloatRBTreeMap$EntryIterator extends Int2FloatRBTreeMap$TreeIterator implements ObjectListIterator<Int2FloatMap$Entry> {
    constructor(null_: Int2FloatRBTreeMap$EntryIterator)
    constructor(null_: Int2FloatRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Int2FloatMap$Entry;
    previous(): Int2FloatMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}