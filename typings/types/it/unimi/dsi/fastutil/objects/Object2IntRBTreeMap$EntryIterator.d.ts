import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2IntMap$Entry.d.ts'
import type { Object2IntRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2IntRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2IntRBTreeMap$EntryIterator extends Object2IntRBTreeMap$TreeIterator implements ObjectListIterator<Object2IntMap$Entry<K>> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: Object)
    add<K extends unknown>(arg0: Object2IntMap$Entry<K>): void;
    next<K extends unknown>(): Object2IntMap$Entry<K>;
    previous<K extends unknown>(): Object2IntMap$Entry<K>;
    remove(): void;
    set<K extends unknown>(arg0: Object2IntMap$Entry<K>): void;
}