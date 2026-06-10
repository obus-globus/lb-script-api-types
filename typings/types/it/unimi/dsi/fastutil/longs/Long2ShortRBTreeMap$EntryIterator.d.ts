import type { Long2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ShortMap$Entry.d.ts'
import type { Long2ShortRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ShortRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Long2ShortRBTreeMap$EntryIterator extends Long2ShortRBTreeMap$TreeIterator implements ObjectListIterator<Long2ShortMap$Entry> {
    constructor(null_: Long2ShortRBTreeMap$EntryIterator)
    constructor(null_: Long2ShortRBTreeMap$EntryIterator, arg1: number)
    add(arg0: Long2ShortMap$Entry): void;
    next(): Long2ShortMap$Entry;
    previous(): Long2ShortMap$Entry;
    remove(): void;
    set(arg0: Long2ShortMap$Entry): void;
}