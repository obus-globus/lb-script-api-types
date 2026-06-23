import type { Object2CharAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharAVLTreeMap$TreeIterator.d.ts'
import type { Object2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2CharAVLTreeMap$EntryIterator extends Object2CharAVLTreeMap$TreeIterator implements ObjectListIterator<Object2CharMap$Entry<K>> {
    constructor(null_: Object2CharAVLTreeMap$EntryIterator)
    constructor(null_: Object2CharAVLTreeMap$EntryIterator)
    add<K extends unknown>(arg0: Object2CharMap$Entry<K>): void;
    next<K extends unknown>(): Object2CharMap$Entry<K>;
    previous<K extends unknown>(): Object2CharMap$Entry<K>;
    remove(): void;
    set<K extends unknown>(arg0: Object2CharMap$Entry<K>): void;
}