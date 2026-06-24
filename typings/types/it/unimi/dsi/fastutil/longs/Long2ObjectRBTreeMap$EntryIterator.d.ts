import type { Long2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ObjectMap$Entry.d.ts'
import type { Long2ObjectRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ObjectRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ObjectRBTreeMap$EntryIterator extends Long2ObjectRBTreeMap$TreeIterator implements ObjectListIterator<Long2ObjectMap$Entry<V>> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    add<V extends unknown>(arg0: Long2ObjectMap$Entry<V>): void;
    next<V extends unknown>(): Long2ObjectMap$Entry<V>;
    previous<V extends unknown>(): Long2ObjectMap$Entry<V>;
    remove(): void;
    set<V extends unknown>(arg0: Long2ObjectMap$Entry<V>): void;
}