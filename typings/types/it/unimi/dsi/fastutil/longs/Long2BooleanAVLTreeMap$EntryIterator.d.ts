import type { Long2BooleanAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2BooleanAVLTreeMap$TreeIterator.d.ts'
import type { Long2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2BooleanMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Long2BooleanAVLTreeMap$EntryIterator extends Long2BooleanAVLTreeMap$TreeIterator implements ObjectListIterator<Long2BooleanMap$Entry> {
    constructor(null_: Long2BooleanAVLTreeMap$EntryIterator)
    constructor(null_: Long2BooleanAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Long2BooleanMap$Entry): void;
    next(): Long2BooleanMap$Entry;
    previous(): Long2BooleanMap$Entry;
    remove(): void;
    set(arg0: Long2BooleanMap$Entry): void;
}