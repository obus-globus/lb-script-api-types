import type { Double2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2BooleanMap$Entry.d.ts'
import type { Double2BooleanRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2BooleanRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2BooleanRBTreeMap$EntryIterator extends Double2BooleanRBTreeMap$TreeIterator implements ObjectListIterator<Double2BooleanMap$Entry> {
    constructor(null_: Double2BooleanRBTreeMap$EntryIterator)
    constructor(null_: Double2BooleanRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Double2BooleanMap$Entry;
    previous(): Double2BooleanMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}