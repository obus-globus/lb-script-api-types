import type { Long2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ObjectMap$Entry.d.ts'
import type { Long2ObjectRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ObjectRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ObjectRBTreeMap$EntryIterator extends Long2ObjectRBTreeMap$TreeIterator implements ObjectListIterator<Long2ObjectMap$Entry<V>> {
    constructor(null_: Long2ObjectRBTreeMap$EntryIterator)
    constructor(null_: Long2ObjectRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Long2ObjectMap$Entry<V>;
    previous(): Long2ObjectMap$Entry<V>;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}