import type { Int2ObjectAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectAVLTreeMap$TreeIterator.d.ts'
import type { Int2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ObjectAVLTreeMap$EntryIterator extends Int2ObjectAVLTreeMap$TreeIterator implements ObjectListIterator<Int2ObjectMap$Entry<V>> {
    constructor(null_: Int2ObjectAVLTreeMap$EntryIterator)
    constructor(null_: Int2ObjectAVLTreeMap$EntryIterator, arg1: number)
    add<V extends Object | number | string | boolean>(arg0: Int2ObjectMap$Entry<V>): void;
    next<V extends Object | number | string | boolean>(): Int2ObjectMap$Entry<V>;
    previous<V extends Object | number | string | boolean>(): Int2ObjectMap$Entry<V>;
    remove(): void;
    set<V extends Object | number | string | boolean>(arg0: Int2ObjectMap$Entry<V>): void;
}