import type { Object2FloatAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatAVLTreeMap$TreeIterator.d.ts'
import type { Object2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2FloatAVLTreeMap$EntryIterator extends Object2FloatAVLTreeMap$TreeIterator implements ObjectListIterator<Object2FloatMap$Entry<K>> {
    constructor(null_: Object2FloatAVLTreeMap$EntryIterator)
    constructor(null_: Object2FloatAVLTreeMap$EntryIterator)
    add<K extends unknown>(arg0: Object2FloatMap$Entry<K>): void;
    next<K extends unknown>(): Object2FloatMap$Entry<K>;
    previous<K extends unknown>(): Object2FloatMap$Entry<K>;
    remove(): void;
    set<K extends unknown>(arg0: Object2FloatMap$Entry<K>): void;
}