import type { Object2LongAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongAVLTreeMap$TreeIterator.d.ts'
import type { Object2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2LongAVLTreeMap$EntryIterator extends Object2LongAVLTreeMap$TreeIterator implements ObjectListIterator<Object2LongMap$Entry<K>> {
    constructor(null_: Object2LongAVLTreeMap$EntryIterator)
    constructor(null_: Object2LongAVLTreeMap$EntryIterator)
    add<K extends Object | number | string | boolean>(arg0: Object2LongMap$Entry<K>): void;
    next<K extends Object | number | string | boolean>(): Object2LongMap$Entry<K>;
    previous<K extends Object | number | string | boolean>(): Object2LongMap$Entry<K>;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: Object2LongMap$Entry<K>): void;
}