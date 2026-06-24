import type { Object2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongMap$Entry.d.ts'
import type { Object2LongRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2LongRBTreeMap$EntryIterator extends Object2LongRBTreeMap$TreeIterator implements ObjectListIterator<Object2LongMap$Entry<K>> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: K)
    add<K extends unknown>(arg0: Object2LongMap$Entry<K>): void;
    next<K extends unknown>(): Object2LongMap$Entry<K>;
    previous<K extends unknown>(): Object2LongMap$Entry<K>;
    remove(): void;
    set<K extends unknown>(arg0: Object2LongMap$Entry<K>): void;
}