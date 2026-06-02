import type { Double2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ReferenceMap$Entry.d.ts'
import type { Double2ReferenceRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ReferenceRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ReferenceRBTreeMap$EntryIterator extends Double2ReferenceRBTreeMap$TreeIterator implements ObjectListIterator<Double2ReferenceMap$Entry<V>> {
    constructor(null_: Double2ReferenceRBTreeMap$EntryIterator)
    constructor(null_: Double2ReferenceRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Double2ReferenceMap$Entry<V>;
    previous(): Double2ReferenceMap$Entry<V>;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}