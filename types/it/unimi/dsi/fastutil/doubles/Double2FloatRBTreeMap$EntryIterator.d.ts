import type { Double2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2FloatMap$Entry.d.ts'
import type { Double2FloatRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2FloatRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2FloatRBTreeMap$EntryIterator extends Double2FloatRBTreeMap$TreeIterator implements ObjectListIterator<Double2FloatMap$Entry> {
    constructor(null_: Double2FloatRBTreeMap$EntryIterator)
    constructor(null_: Double2FloatRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Double2FloatMap$Entry;
    previous(): Double2FloatMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}