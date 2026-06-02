import type { Int2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ByteMap$Entry.d.ts'
import type { Int2ByteRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ByteRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ByteRBTreeMap$EntryIterator extends Int2ByteRBTreeMap$TreeIterator implements ObjectListIterator<Int2ByteMap$Entry> {
    constructor(null_: Int2ByteRBTreeMap$EntryIterator)
    constructor(null_: Int2ByteRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Int2ByteMap$Entry;
    previous(): Int2ByteMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}