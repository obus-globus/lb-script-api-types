import type { Long2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2FloatMap$Entry.d.ts'
import type { Long2FloatRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2FloatRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2FloatRBTreeMap$EntryIterator extends Long2FloatRBTreeMap$TreeIterator implements ObjectListIterator<Long2FloatMap$Entry> {
    constructor(null_: Long2FloatRBTreeMap$EntryIterator)
    constructor(null_: Long2FloatRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Long2FloatMap$Entry;
    previous(): Long2FloatMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}