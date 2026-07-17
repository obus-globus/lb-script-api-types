import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceMap$Entry.d.ts'
import type { Object2ReferenceRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ReferenceRBTreeMap$EntryIterator extends Object2ReferenceRBTreeMap$TreeIterator implements ObjectListIterator<Object2ReferenceMap$Entry<K, V>> {
    constructor(null_: JavaMap<Object, Object>)
    constructor(null_: JavaMap<Object, Object>, arg1: Object)
    add<K extends unknown, V extends unknown>(arg0: Object2ReferenceMap$Entry<K, V>): void;
    next<K extends unknown, V extends unknown>(): Object2ReferenceMap$Entry<K, V>;
    previous<K extends unknown, V extends unknown>(): Object2ReferenceMap$Entry<K, V>;
    remove(): void;
    set<K extends unknown, V extends unknown>(arg0: Object2ReferenceMap$Entry<K, V>): void;
}