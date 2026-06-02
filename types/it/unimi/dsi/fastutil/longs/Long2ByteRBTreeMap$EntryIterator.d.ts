import type { Long2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ByteMap$Entry.d.ts'
import type { Long2ByteRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ByteRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ByteRBTreeMap$EntryIterator extends Long2ByteRBTreeMap$TreeIterator implements ObjectListIterator<Long2ByteMap$Entry> {
    constructor(null_: Long2ByteRBTreeMap$EntryIterator)
    constructor(null_: Long2ByteRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Long2ByteMap$Entry;
    previous(): Long2ByteMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}