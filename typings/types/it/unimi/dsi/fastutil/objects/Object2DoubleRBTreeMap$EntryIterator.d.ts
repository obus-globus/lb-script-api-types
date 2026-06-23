import type { Object2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleMap$Entry.d.ts'
import type { Object2DoubleRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2DoubleRBTreeMap$EntryIterator extends Object2DoubleRBTreeMap$TreeIterator implements ObjectListIterator<Object2DoubleMap$Entry<K>> {
    constructor(null_: Object2DoubleRBTreeMap$EntryIterator)
    constructor(null_: Object2DoubleRBTreeMap$EntryIterator)
    add<K extends unknown>(arg0: Object2DoubleMap$Entry<K>): void;
    next<K extends unknown>(): Object2DoubleMap$Entry<K>;
    previous<K extends unknown>(): Object2DoubleMap$Entry<K>;
    remove(): void;
    set<K extends unknown>(arg0: Object2DoubleMap$Entry<K>): void;
}