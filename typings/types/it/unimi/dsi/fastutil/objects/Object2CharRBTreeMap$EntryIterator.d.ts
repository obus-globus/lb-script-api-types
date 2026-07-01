import type { Object2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharMap$Entry.d.ts'
import type { Object2CharRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2CharRBTreeMap$EntryIterator extends Object2CharRBTreeMap$TreeIterator implements ObjectListIterator<Object2CharMap$Entry<K>> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: Object)
    add<K extends unknown>(arg0: Object2CharMap$Entry<K>): void;
    next<K extends unknown>(): Object2CharMap$Entry<K>;
    previous<K extends unknown>(): Object2CharMap$Entry<K>;
    remove(): void;
    set<K extends unknown>(arg0: Object2CharMap$Entry<K>): void;
}