import type { Object2BooleanAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanAVLTreeMap$TreeIterator.d.ts'
import type { Object2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2BooleanAVLTreeMap$EntryIterator extends Object2BooleanAVLTreeMap$TreeIterator implements ObjectListIterator<Object2BooleanMap$Entry<K>> {
    constructor(null_: Object2BooleanAVLTreeMap$EntryIterator)
    constructor(null_: Object2BooleanAVLTreeMap$EntryIterator)
    add<K extends unknown>(arg0: Object2BooleanMap$Entry<K>): void;
    next<K extends unknown>(): Object2BooleanMap$Entry<K>;
    previous<K extends unknown>(): Object2BooleanMap$Entry<K>;
    remove(): void;
    set<K extends unknown>(arg0: Object2BooleanMap$Entry<K>): void;
}