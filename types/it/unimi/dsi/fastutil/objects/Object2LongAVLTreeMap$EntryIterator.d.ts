import type { Object2LongAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongAVLTreeMap$TreeIterator.d.ts'
import type { Object2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2LongAVLTreeMap$EntryIterator extends Object2LongAVLTreeMap$TreeIterator implements ObjectListIterator<Object2LongMap$Entry<K>> {
    constructor(null_: Object2LongAVLTreeMap$EntryIterator)
    constructor(null_: Object2LongAVLTreeMap$EntryIterator)
    add(arg0: Object2LongMap$Entry<K>): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Object2LongMap$Entry<K>;
    previous(): Object2LongMap$Entry<K>;
    remove(): void;
    set(arg0: Object2LongMap$Entry<K>): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}