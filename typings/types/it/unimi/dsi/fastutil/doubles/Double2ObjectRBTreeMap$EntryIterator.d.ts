import type { Double2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ObjectMap$Entry.d.ts'
import type { Double2ObjectRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ObjectRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ObjectRBTreeMap$EntryIterator extends Double2ObjectRBTreeMap$TreeIterator implements ObjectListIterator<Double2ObjectMap$Entry<V>> {
    constructor(null_: Double2ObjectRBTreeMap$EntryIterator)
    constructor(null_: Double2ObjectRBTreeMap$EntryIterator, arg1: number)
    add<V extends Object | number | string | boolean>(arg0: Double2ObjectMap$Entry<V>): void;
    next<V extends Object | number | string | boolean>(): Double2ObjectMap$Entry<V>;
    previous<V extends Object | number | string | boolean>(): Double2ObjectMap$Entry<V>;
    remove(): void;
    set<V extends Object | number | string | boolean>(arg0: Double2ObjectMap$Entry<V>): void;
}