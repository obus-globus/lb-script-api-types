import type { Double2ReferenceAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ReferenceAVLTreeMap$TreeIterator.d.ts'
import type { Double2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ReferenceMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ReferenceAVLTreeMap$EntryIterator extends Double2ReferenceAVLTreeMap$TreeIterator implements ObjectListIterator<Double2ReferenceMap$Entry<V>> {
    constructor(null_: Double2ReferenceAVLTreeMap$EntryIterator)
    constructor(null_: Double2ReferenceAVLTreeMap$EntryIterator, arg1: number)
    add<V extends unknown>(arg0: Double2ReferenceMap$Entry<V>): void;
    next<V extends unknown>(): Double2ReferenceMap$Entry<V>;
    previous<V extends unknown>(): Double2ReferenceMap$Entry<V>;
    remove(): void;
    set<V extends unknown>(arg0: Double2ReferenceMap$Entry<V>): void;
}