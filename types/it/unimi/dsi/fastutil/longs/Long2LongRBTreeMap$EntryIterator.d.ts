import type { Long2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2LongMap$Entry.d.ts'
import type { Long2LongRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2LongRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2LongRBTreeMap$EntryIterator extends Long2LongRBTreeMap$TreeIterator implements ObjectListIterator<Long2LongMap$Entry> {
    constructor(null_: Long2LongRBTreeMap$EntryIterator)
    constructor(null_: Long2LongRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Long2LongMap$Entry;
    previous(): Long2LongMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}