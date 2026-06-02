import type { Double2ObjectAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ObjectAVLTreeMap$TreeIterator.d.ts'
import type { Double2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ObjectMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ObjectAVLTreeMap$EntryIterator extends Double2ObjectAVLTreeMap$TreeIterator implements ObjectListIterator<Double2ObjectMap$Entry<V>> {
    constructor(null_: Double2ObjectAVLTreeMap$EntryIterator)
    constructor(null_: Double2ObjectAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Double2ObjectMap$Entry<V>): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Double2ObjectMap$Entry<V>;
    previous(): Double2ObjectMap$Entry<V>;
    remove(): void;
    set(arg0: Double2ObjectMap$Entry<V>): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}