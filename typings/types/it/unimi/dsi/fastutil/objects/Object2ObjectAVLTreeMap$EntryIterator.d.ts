import type { Object2ObjectAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectAVLTreeMap$TreeIterator.d.ts'
import type { Object2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ObjectAVLTreeMap$EntryIterator extends Object2ObjectAVLTreeMap$TreeIterator implements ObjectListIterator<Object2ObjectMap$Entry<K, V>> {
    constructor(null_: Object2ObjectAVLTreeMap$EntryIterator)
    constructor(null_: Object2ObjectAVLTreeMap$EntryIterator)
    add<K extends unknown, V extends unknown>(arg0: Object2ObjectMap$Entry<K, V>): void;
    next<K extends unknown, V extends unknown>(): Object2ObjectMap$Entry<K, V>;
    previous<K extends unknown, V extends unknown>(): Object2ObjectMap$Entry<K, V>;
    remove(): void;
    set<K extends unknown, V extends unknown>(arg0: Object2ObjectMap$Entry<K, V>): void;
}