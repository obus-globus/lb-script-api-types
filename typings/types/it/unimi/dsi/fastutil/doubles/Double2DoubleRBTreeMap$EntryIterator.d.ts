import type { Double2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2DoubleMap$Entry.d.ts'
import type { Double2DoubleRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2DoubleRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Double2DoubleRBTreeMap$EntryIterator extends Double2DoubleRBTreeMap$TreeIterator implements ObjectListIterator<Double2DoubleMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    add(arg0: Double2DoubleMap$Entry): void;
    next(): Double2DoubleMap$Entry;
    previous(): Double2DoubleMap$Entry;
    remove(): void;
    set(arg0: Double2DoubleMap$Entry): void;
}