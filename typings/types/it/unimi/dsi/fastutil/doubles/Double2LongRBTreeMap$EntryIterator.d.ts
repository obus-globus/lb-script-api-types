import type { Double2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2LongMap$Entry.d.ts'
import type { Double2LongRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2LongRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Double2LongRBTreeMap$EntryIterator extends Double2LongRBTreeMap$TreeIterator implements ObjectListIterator<Double2LongMap$Entry> {
    constructor(null_: Double2LongRBTreeMap$EntryIterator)
    constructor(null_: Double2LongRBTreeMap$EntryIterator, arg1: number)
    add(arg0: Double2LongMap$Entry): void;
    next(): Double2LongMap$Entry;
    previous(): Double2LongMap$Entry;
    remove(): void;
    set(arg0: Double2LongMap$Entry): void;
}