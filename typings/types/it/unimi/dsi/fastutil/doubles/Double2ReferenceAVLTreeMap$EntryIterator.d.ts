import type { Double2ReferenceAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ReferenceAVLTreeMap$TreeIterator.d.ts'
import type { Double2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ReferenceMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ReferenceAVLTreeMap$EntryIterator extends Double2ReferenceAVLTreeMap$TreeIterator implements ObjectListIterator<Double2ReferenceMap$Entry<V>> {
    constructor(null_: Double2ReferenceAVLTreeMap$EntryIterator)
    constructor(null_: Double2ReferenceAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Double2ReferenceMap$Entry<V>): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Double2ReferenceMap$Entry<V>;
    previous(): Double2ReferenceMap$Entry<V>;
    remove(): void;
    set(arg0: Double2ReferenceMap$Entry<V>): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}