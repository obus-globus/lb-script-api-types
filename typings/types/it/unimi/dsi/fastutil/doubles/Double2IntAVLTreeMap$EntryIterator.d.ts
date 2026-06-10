import type { Double2IntAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2IntAVLTreeMap$TreeIterator.d.ts'
import type { Double2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2IntMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Double2IntAVLTreeMap$EntryIterator extends Double2IntAVLTreeMap$TreeIterator implements ObjectListIterator<Double2IntMap$Entry> {
    constructor(null_: Double2IntAVLTreeMap$EntryIterator)
    constructor(null_: Double2IntAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Double2IntMap$Entry): void;
    next(): Double2IntMap$Entry;
    previous(): Double2IntMap$Entry;
    remove(): void;
    set(arg0: Double2IntMap$Entry): void;
}