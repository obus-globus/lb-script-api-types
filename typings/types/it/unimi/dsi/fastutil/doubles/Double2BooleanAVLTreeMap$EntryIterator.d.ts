import type { Double2BooleanAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2BooleanAVLTreeMap$TreeIterator.d.ts'
import type { Double2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2BooleanMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2BooleanAVLTreeMap$EntryIterator extends Double2BooleanAVLTreeMap$TreeIterator implements ObjectListIterator<Double2BooleanMap$Entry> {
    constructor(null_: Double2BooleanAVLTreeMap$EntryIterator)
    constructor(null_: Double2BooleanAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Double2BooleanMap$Entry): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Double2BooleanMap$Entry;
    previous(): Double2BooleanMap$Entry;
    remove(): void;
    set(arg0: Double2BooleanMap$Entry): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}