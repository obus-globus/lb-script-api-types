import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Double2DoubleAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2DoubleAVLTreeMap$TreeIterator.d.ts'
import type { Double2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2DoubleMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Double2DoubleAVLTreeMap$EntryIterator extends Double2DoubleAVLTreeMap$TreeIterator implements ObjectListIterator<Double2DoubleMap$Entry> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    add(arg0: Double2DoubleMap$Entry): void;
    next(): Double2DoubleMap$Entry;
    previous(): Double2DoubleMap$Entry;
    remove(): void;
    set(arg0: Double2DoubleMap$Entry): void;
}