import type { Long2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2BooleanMap$Entry.d.ts'
import type { Long2BooleanRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2BooleanRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2BooleanRBTreeMap$EntryIterator extends Long2BooleanRBTreeMap$TreeIterator implements ObjectListIterator<Long2BooleanMap$Entry> {
    constructor(null_: Long2BooleanRBTreeMap$EntryIterator)
    constructor(null_: Long2BooleanRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Long2BooleanMap$Entry;
    previous(): Long2BooleanMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}