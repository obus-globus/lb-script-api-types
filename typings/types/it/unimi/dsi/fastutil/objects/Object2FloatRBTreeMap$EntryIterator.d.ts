import type { Object2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatMap$Entry.d.ts'
import type { Object2FloatRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2FloatRBTreeMap$EntryIterator extends Object2FloatRBTreeMap$TreeIterator implements ObjectListIterator<Object2FloatMap$Entry<K>> {
    constructor(null_: Object2FloatRBTreeMap$EntryIterator)
    constructor(null_: Object2FloatRBTreeMap$EntryIterator)
    add<K extends Object | number | string | boolean>(arg0: Object2FloatMap$Entry<K>): void;
    next<K extends Object | number | string | boolean>(): Object2FloatMap$Entry<K>;
    previous<K extends Object | number | string | boolean>(): Object2FloatMap$Entry<K>;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: Object2FloatMap$Entry<K>): void;
}