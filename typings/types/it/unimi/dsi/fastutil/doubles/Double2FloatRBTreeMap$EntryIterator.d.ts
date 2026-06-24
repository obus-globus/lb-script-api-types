import type { Double2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2FloatMap$Entry.d.ts'
import type { Double2FloatRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2FloatRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Double2FloatRBTreeMap$EntryIterator extends Double2FloatRBTreeMap$TreeIterator implements ObjectListIterator<Double2FloatMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    add(arg0: Double2FloatMap$Entry): void;
    next(): Double2FloatMap$Entry;
    previous(): Double2FloatMap$Entry;
    remove(): void;
    set(arg0: Double2FloatMap$Entry): void;
}