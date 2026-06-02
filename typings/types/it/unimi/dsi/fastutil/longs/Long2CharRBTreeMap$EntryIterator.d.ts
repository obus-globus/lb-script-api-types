import type { Long2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharMap$Entry.d.ts'
import type { Long2CharRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2CharRBTreeMap$EntryIterator extends Long2CharRBTreeMap$TreeIterator implements ObjectListIterator<Long2CharMap$Entry> {
    constructor(null_: Long2CharRBTreeMap$EntryIterator)
    constructor(null_: Long2CharRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Long2CharMap$Entry;
    previous(): Long2CharMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}