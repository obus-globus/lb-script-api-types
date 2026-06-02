import type { Int2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2BooleanMap$Entry.d.ts'
import type { Int2BooleanRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2BooleanRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2BooleanRBTreeMap$EntryIterator extends Int2BooleanRBTreeMap$TreeIterator implements ObjectListIterator<Int2BooleanMap$Entry> {
    constructor(null_: Int2BooleanRBTreeMap$EntryIterator)
    constructor(null_: Int2BooleanRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Int2BooleanMap$Entry;
    previous(): Int2BooleanMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}