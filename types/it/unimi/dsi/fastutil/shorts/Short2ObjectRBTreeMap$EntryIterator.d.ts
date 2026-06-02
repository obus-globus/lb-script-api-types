import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectMap$Entry.d.ts'
import type { Short2ObjectRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectRBTreeMap$TreeIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ObjectRBTreeMap$EntryIterator extends Short2ObjectRBTreeMap$TreeIterator implements ObjectListIterator<Short2ObjectMap$Entry<V>> {
    constructor(null_: Short2ObjectRBTreeMap$EntryIterator)
    constructor(null_: Short2ObjectRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Short2ObjectMap$Entry<V>;
    previous(): Short2ObjectMap$Entry<V>;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}