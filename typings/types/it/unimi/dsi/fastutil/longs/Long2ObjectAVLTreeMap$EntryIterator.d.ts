import type { Long2ObjectAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ObjectAVLTreeMap$TreeIterator.d.ts'
import type { Long2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ObjectMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ObjectAVLTreeMap$EntryIterator extends Long2ObjectAVLTreeMap$TreeIterator implements ObjectListIterator<Long2ObjectMap$Entry<V>> {
    constructor(null_: Long2ObjectAVLTreeMap$EntryIterator)
    constructor(null_: Long2ObjectAVLTreeMap$EntryIterator, arg1: number)
    add<V extends Object | number | string | boolean>(arg0: Long2ObjectMap$Entry<V>): void;
    next<V extends Object | number | string | boolean>(): Long2ObjectMap$Entry<V>;
    previous<V extends Object | number | string | boolean>(): Long2ObjectMap$Entry<V>;
    remove(): void;
    set<V extends Object | number | string | boolean>(arg0: Long2ObjectMap$Entry<V>): void;
}