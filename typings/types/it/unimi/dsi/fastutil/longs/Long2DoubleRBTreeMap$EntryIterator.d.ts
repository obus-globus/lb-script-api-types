import type { Long2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2DoubleMap$Entry.d.ts'
import type { Long2DoubleRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2DoubleRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Long2DoubleRBTreeMap$EntryIterator extends Long2DoubleRBTreeMap$TreeIterator implements ObjectListIterator<Long2DoubleMap$Entry> {
    constructor(null_: Long2DoubleRBTreeMap$EntryIterator)
    constructor(null_: Long2DoubleRBTreeMap$EntryIterator, arg1: number)
    add(arg0: Long2DoubleMap$Entry): void;
    next(): Long2DoubleMap$Entry;
    previous(): Long2DoubleMap$Entry;
    remove(): void;
    set(arg0: Long2DoubleMap$Entry): void;
}