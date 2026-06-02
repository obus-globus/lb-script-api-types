import type { Double2FloatAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2FloatAVLTreeMap$TreeIterator.d.ts'
import type { Double2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2FloatMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2FloatAVLTreeMap$EntryIterator extends Double2FloatAVLTreeMap$TreeIterator implements ObjectListIterator<Double2FloatMap$Entry> {
    constructor(null_: Double2FloatAVLTreeMap$EntryIterator)
    constructor(null_: Double2FloatAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Double2FloatMap$Entry): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Double2FloatMap$Entry;
    previous(): Double2FloatMap$Entry;
    remove(): void;
    set(arg0: Double2FloatMap$Entry): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}