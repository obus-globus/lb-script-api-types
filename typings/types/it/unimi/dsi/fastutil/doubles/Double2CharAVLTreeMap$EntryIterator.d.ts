import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Double2CharAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2CharAVLTreeMap$TreeIterator.d.ts'
import type { Double2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2CharMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Double2CharAVLTreeMap$EntryIterator extends Double2CharAVLTreeMap$TreeIterator implements ObjectListIterator<Double2CharMap$Entry> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    add(arg0: Double2CharMap$Entry): void;
    next(): Double2CharMap$Entry;
    previous(): Double2CharMap$Entry;
    remove(): void;
    set(arg0: Double2CharMap$Entry): void;
}