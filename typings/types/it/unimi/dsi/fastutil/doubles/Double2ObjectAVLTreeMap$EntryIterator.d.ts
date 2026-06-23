import type { Double2ObjectAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ObjectAVLTreeMap$TreeIterator.d.ts'
import type { Double2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ObjectMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ObjectAVLTreeMap$EntryIterator extends Double2ObjectAVLTreeMap$TreeIterator implements ObjectListIterator<Double2ObjectMap$Entry<V>> {
    constructor(null_: Double2ObjectAVLTreeMap$EntryIterator)
    constructor(null_: Double2ObjectAVLTreeMap$EntryIterator, arg1: number)
    add<V extends unknown>(arg0: Double2ObjectMap$Entry<V>): void;
    next<V extends unknown>(): Double2ObjectMap$Entry<V>;
    previous<V extends unknown>(): Double2ObjectMap$Entry<V>;
    remove(): void;
    set<V extends unknown>(arg0: Double2ObjectMap$Entry<V>): void;
}