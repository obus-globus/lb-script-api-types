import type { Double2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2IntMap$Entry.d.ts'
import type { Double2IntRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2IntRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Double2IntRBTreeMap$EntryIterator extends Double2IntRBTreeMap$TreeIterator implements ObjectListIterator<Double2IntMap$Entry> {
    constructor(null_: Double2IntRBTreeMap$EntryIterator)
    constructor(null_: Double2IntRBTreeMap$EntryIterator, arg1: number)
    add(arg0: Double2IntMap$Entry): void;
    next(): Double2IntMap$Entry;
    previous(): Double2IntMap$Entry;
    remove(): void;
    set(arg0: Double2IntMap$Entry): void;
}