import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectMap$Entry.d.ts'
import type { Short2ObjectRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectRBTreeMap$TreeIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ObjectRBTreeMap$EntryIterator extends Short2ObjectRBTreeMap$TreeIterator implements ObjectListIterator<Short2ObjectMap$Entry<V>> {
    constructor(null_: Short2ObjectRBTreeMap$EntryIterator)
    constructor(null_: Short2ObjectRBTreeMap$EntryIterator, arg1: number)
    add<V extends unknown>(arg0: Short2ObjectMap$Entry<V>): void;
    next<V extends unknown>(): Short2ObjectMap$Entry<V>;
    previous<V extends unknown>(): Short2ObjectMap$Entry<V>;
    remove(): void;
    set<V extends unknown>(arg0: Short2ObjectMap$Entry<V>): void;
}