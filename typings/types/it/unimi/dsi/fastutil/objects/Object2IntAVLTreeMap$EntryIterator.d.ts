import type { Object2IntAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2IntAVLTreeMap$TreeIterator.d.ts'
import type { Object2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2IntMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2IntAVLTreeMap$EntryIterator extends Object2IntAVLTreeMap$TreeIterator implements ObjectListIterator<Object2IntMap$Entry<K>> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: K)
    add<K extends unknown>(arg0: Object2IntMap$Entry<K>): void;
    next<K extends unknown>(): Object2IntMap$Entry<K>;
    previous<K extends unknown>(): Object2IntMap$Entry<K>;
    remove(): void;
    set<K extends unknown>(arg0: Object2IntMap$Entry<K>): void;
}