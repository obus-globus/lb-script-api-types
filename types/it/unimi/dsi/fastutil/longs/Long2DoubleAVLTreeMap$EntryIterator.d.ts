import type { Long2DoubleAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2DoubleAVLTreeMap$TreeIterator.d.ts'
import type { Long2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2DoubleMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2DoubleAVLTreeMap$EntryIterator extends Long2DoubleAVLTreeMap$TreeIterator implements ObjectListIterator<Long2DoubleMap$Entry> {
    constructor(null_: Long2DoubleAVLTreeMap$EntryIterator)
    constructor(null_: Long2DoubleAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Long2DoubleMap$Entry): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Long2DoubleMap$Entry;
    previous(): Long2DoubleMap$Entry;
    remove(): void;
    set(arg0: Long2DoubleMap$Entry): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}