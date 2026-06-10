import type { Object2IntAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2IntAVLTreeMap$TreeIterator.d.ts'
import type { Object2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2IntMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2IntAVLTreeMap$EntryIterator extends Object2IntAVLTreeMap$TreeIterator implements ObjectListIterator<Object2IntMap$Entry<K>> {
    constructor(null_: Object2IntAVLTreeMap$EntryIterator)
    constructor(null_: Object2IntAVLTreeMap$EntryIterator)
    add<K extends Object | number | string | boolean>(arg0: Object2IntMap$Entry<K>): void;
    next<K extends Object | number | string | boolean>(): Object2IntMap$Entry<K>;
    previous<K extends Object | number | string | boolean>(): Object2IntMap$Entry<K>;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: Object2IntMap$Entry<K>): void;
}