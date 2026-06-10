import type { Object2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2IntMap$Entry.d.ts'
import type { Object2IntRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2IntRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2IntRBTreeMap$EntryIterator extends Object2IntRBTreeMap$TreeIterator implements ObjectListIterator<Object2IntMap$Entry<K>> {
    constructor(null_: Object2IntRBTreeMap$EntryIterator)
    constructor(null_: Object2IntRBTreeMap$EntryIterator)
    add<K extends Object | number | string | boolean>(arg0: Object2IntMap$Entry<K>): void;
    next<K extends Object | number | string | boolean>(): Object2IntMap$Entry<K>;
    previous<K extends Object | number | string | boolean>(): Object2IntMap$Entry<K>;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: Object2IntMap$Entry<K>): void;
}