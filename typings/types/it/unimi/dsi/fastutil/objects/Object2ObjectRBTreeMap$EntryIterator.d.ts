import type { Object2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectMap$Entry.d.ts'
import type { Object2ObjectRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ObjectRBTreeMap$EntryIterator extends Object2ObjectRBTreeMap$TreeIterator implements ObjectListIterator<Object2ObjectMap$Entry<K, V>> {
    constructor(null_: Object2ObjectRBTreeMap$EntryIterator)
    constructor(null_: Object2ObjectRBTreeMap$EntryIterator)
    add<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(arg0: Object2ObjectMap$Entry<K, V>): void;
    next<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(): Object2ObjectMap$Entry<K, V>;
    previous<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(): Object2ObjectMap$Entry<K, V>;
    remove(): void;
    set<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(arg0: Object2ObjectMap$Entry<K, V>): void;
}