import type { Double2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2IntMap$Entry.d.ts'
import type { Double2IntRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2IntRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2IntRBTreeMap$EntryIterator extends Double2IntRBTreeMap$TreeIterator implements ObjectListIterator<Double2IntMap$Entry> {
    constructor(null_: Double2IntRBTreeMap$EntryIterator)
    constructor(null_: Double2IntRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Double2IntMap$Entry;
    previous(): Double2IntMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}