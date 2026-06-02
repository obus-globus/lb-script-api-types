import type { Double2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2CharMap$Entry.d.ts'
import type { Double2CharRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2CharRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2CharRBTreeMap$EntryIterator extends Double2CharRBTreeMap$TreeIterator implements ObjectListIterator<Double2CharMap$Entry> {
    constructor(null_: Double2CharRBTreeMap$EntryIterator)
    constructor(null_: Double2CharRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Double2CharMap$Entry;
    previous(): Double2CharMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}