import type { Long2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2BooleanMap$Entry.d.ts'
import type { Long2BooleanRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2BooleanRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Long2BooleanRBTreeMap$EntryIterator extends Long2BooleanRBTreeMap$TreeIterator implements ObjectListIterator<Long2BooleanMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    add(arg0: Long2BooleanMap$Entry): void;
    next(): Long2BooleanMap$Entry;
    previous(): Long2BooleanMap$Entry;
    remove(): void;
    set(arg0: Long2BooleanMap$Entry): void;
}