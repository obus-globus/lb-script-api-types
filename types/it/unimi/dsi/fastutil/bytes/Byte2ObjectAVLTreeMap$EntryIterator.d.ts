import type { Byte2ObjectAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ObjectAVLTreeMap$TreeIterator.d.ts'
import type { Byte2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ObjectMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ObjectAVLTreeMap$EntryIterator extends Byte2ObjectAVLTreeMap$TreeIterator implements ObjectListIterator<Byte2ObjectMap$Entry<V>> {
    constructor(null_: Byte2ObjectAVLTreeMap$EntryIterator)
    constructor(null_: Byte2ObjectAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Byte2ObjectMap$Entry<V>): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Byte2ObjectMap$Entry<V>;
    previous(): Byte2ObjectMap$Entry<V>;
    remove(): void;
    set(arg0: Byte2ObjectMap$Entry<V>): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}