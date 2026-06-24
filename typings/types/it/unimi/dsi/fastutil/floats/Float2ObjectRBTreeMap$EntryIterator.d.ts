import type { Float2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectMap$Entry.d.ts'
import type { Float2ObjectRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ObjectRBTreeMap$EntryIterator extends Float2ObjectRBTreeMap$TreeIterator implements ObjectListIterator<Float2ObjectMap$Entry<V>> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    add<V extends unknown>(arg0: Float2ObjectMap$Entry<V>): void;
    next<V extends unknown>(): Float2ObjectMap$Entry<V>;
    previous<V extends unknown>(): Float2ObjectMap$Entry<V>;
    remove(): void;
    set<V extends unknown>(arg0: Float2ObjectMap$Entry<V>): void;
}