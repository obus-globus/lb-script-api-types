import type { Object2ReferenceAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceAVLTreeMap$TreeIterator.d.ts'
import type { Object2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ReferenceAVLTreeMap$EntryIterator extends Object2ReferenceAVLTreeMap$TreeIterator implements ObjectListIterator<Object2ReferenceMap$Entry<K, V>> {
    constructor(null_: Object2ReferenceAVLTreeMap$EntryIterator)
    constructor(null_: Object2ReferenceAVLTreeMap$EntryIterator)
    add(arg0: Object2ReferenceMap$Entry<K, V>): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Object2ReferenceMap$Entry<K, V>;
    previous(): Object2ReferenceMap$Entry<K, V>;
    remove(): void;
    set(arg0: Object2ReferenceMap$Entry<K, V>): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}