import type { Double2ShortAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ShortAVLTreeMap$TreeIterator.d.ts'
import type { Double2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ShortMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Double2ShortAVLTreeMap$EntryIterator extends Double2ShortAVLTreeMap$TreeIterator implements ObjectListIterator<Double2ShortMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    add(arg0: Double2ShortMap$Entry): void;
    next(): Double2ShortMap$Entry;
    previous(): Double2ShortMap$Entry;
    remove(): void;
    set(arg0: Double2ShortMap$Entry): void;
}