import type { Long2IntAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2IntAVLTreeMap$TreeIterator.d.ts'
import type { Long2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2IntMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Long2IntAVLTreeMap$EntryIterator extends Long2IntAVLTreeMap$TreeIterator implements ObjectListIterator<Long2IntMap$Entry> {
    constructor(null_: Long2IntAVLTreeMap$EntryIterator)
    constructor(null_: Long2IntAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Long2IntMap$Entry): void;
    next(): Long2IntMap$Entry;
    previous(): Long2IntMap$Entry;
    remove(): void;
    set(arg0: Long2IntMap$Entry): void;
}