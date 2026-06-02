import type { Object2ObjectAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectAVLTreeMap$TreeIterator.d.ts'
import type { Object2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ObjectAVLTreeMap$EntryIterator extends Object2ObjectAVLTreeMap$TreeIterator implements ObjectListIterator<Object2ObjectMap$Entry<K, V>> {
    constructor(null_: Object2ObjectAVLTreeMap$EntryIterator)
    constructor(null_: Object2ObjectAVLTreeMap$EntryIterator)
    add(arg0: Object2ObjectMap$Entry<K, V>): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Object2ObjectMap$Entry<K, V>;
    previous(): Object2ObjectMap$Entry<K, V>;
    remove(): void;
    set(arg0: Object2ObjectMap$Entry<K, V>): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}