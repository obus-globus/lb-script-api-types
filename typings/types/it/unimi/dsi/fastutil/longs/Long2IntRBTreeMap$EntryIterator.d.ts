import type { Long2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2IntMap$Entry.d.ts'
import type { Long2IntRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2IntRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2IntRBTreeMap$EntryIterator extends Long2IntRBTreeMap$TreeIterator implements ObjectListIterator<Long2IntMap$Entry> {
    constructor(null_: Long2IntRBTreeMap$EntryIterator)
    constructor(null_: Long2IntRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Long2IntMap$Entry;
    previous(): Long2IntMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}