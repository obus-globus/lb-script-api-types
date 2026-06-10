import type { Long2LongAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2LongAVLTreeMap$TreeIterator.d.ts'
import type { Long2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2LongMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Long2LongAVLTreeMap$EntryIterator extends Long2LongAVLTreeMap$TreeIterator implements ObjectListIterator<Long2LongMap$Entry> {
    constructor(null_: Long2LongAVLTreeMap$EntryIterator)
    constructor(null_: Long2LongAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Long2LongMap$Entry): void;
    next(): Long2LongMap$Entry;
    previous(): Long2LongMap$Entry;
    remove(): void;
    set(arg0: Long2LongMap$Entry): void;
}