import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2ObjectAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectAVLTreeMap$TreeIterator.d.ts'
import type { Short2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ObjectAVLTreeMap$EntryIterator extends Short2ObjectAVLTreeMap$TreeIterator implements ObjectListIterator<Short2ObjectMap$Entry<V>> {
    constructor(null_: Short2ObjectAVLTreeMap$EntryIterator)
    constructor(null_: Short2ObjectAVLTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    add(arg0: Short2ObjectMap$Entry<V>): void;
    next(): Short2ObjectMap$Entry<V>;
    previous(): Short2ObjectMap$Entry<V>;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
    set(arg0: Short2ObjectMap$Entry<V>): void;
}