import type { Long2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2FloatMap$Entry.d.ts'
import type { Long2FloatRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2FloatRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Long2FloatRBTreeMap$EntryIterator extends Long2FloatRBTreeMap$TreeIterator implements ObjectListIterator<Long2FloatMap$Entry> {
    constructor(null_: Long2FloatRBTreeMap$EntryIterator)
    constructor(null_: Long2FloatRBTreeMap$EntryIterator, arg1: number)
    add(arg0: Long2FloatMap$Entry): void;
    next(): Long2FloatMap$Entry;
    previous(): Long2FloatMap$Entry;
    remove(): void;
    set(arg0: Long2FloatMap$Entry): void;
}