import type { Int2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectMap$Entry.d.ts'
import type { Int2ObjectRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ObjectRBTreeMap$EntryIterator extends Int2ObjectRBTreeMap$TreeIterator implements ObjectListIterator<Int2ObjectMap$Entry<V>> {
    constructor(null_: Int2ObjectRBTreeMap$EntryIterator)
    constructor(null_: Int2ObjectRBTreeMap$EntryIterator, arg1: number)
    add<V extends unknown>(arg0: Int2ObjectMap$Entry<V>): void;
    next<V extends unknown>(): Int2ObjectMap$Entry<V>;
    previous<V extends unknown>(): Int2ObjectMap$Entry<V>;
    remove(): void;
    set<V extends unknown>(arg0: Int2ObjectMap$Entry<V>): void;
}