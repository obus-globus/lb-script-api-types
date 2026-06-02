import type { Float2ObjectAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectAVLTreeMap$TreeIterator.d.ts'
import type { Float2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ObjectAVLTreeMap$EntryIterator extends Float2ObjectAVLTreeMap$TreeIterator implements ObjectListIterator<Float2ObjectMap$Entry<V>> {
    constructor(null_: Float2ObjectAVLTreeMap$EntryIterator)
    constructor(null_: Float2ObjectAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Float2ObjectMap$Entry<V>): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Float2ObjectMap$Entry<V>;
    previous(): Float2ObjectMap$Entry<V>;
    remove(): void;
    set(arg0: Float2ObjectMap$Entry<V>): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}