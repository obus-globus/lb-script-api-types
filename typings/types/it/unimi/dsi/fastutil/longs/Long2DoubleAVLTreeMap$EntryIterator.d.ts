import type { Long2DoubleAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2DoubleAVLTreeMap$TreeIterator.d.ts'
import type { Long2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2DoubleMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Long2DoubleAVLTreeMap$EntryIterator extends Long2DoubleAVLTreeMap$TreeIterator implements ObjectListIterator<Long2DoubleMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    add(arg0: Long2DoubleMap$Entry): void;
    next(): Long2DoubleMap$Entry;
    previous(): Long2DoubleMap$Entry;
    remove(): void;
    set(arg0: Long2DoubleMap$Entry): void;
}