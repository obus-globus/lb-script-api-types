import type { Object2BooleanAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanAVLTreeMap$TreeIterator.d.ts'
import type { Object2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2BooleanAVLTreeMap$EntryIterator extends Object2BooleanAVLTreeMap$TreeIterator implements ObjectListIterator<Object2BooleanMap$Entry<K>> {
    constructor(null_: Object2BooleanAVLTreeMap$EntryIterator)
    constructor(null_: Object2BooleanAVLTreeMap$EntryIterator)
    add(arg0: Object2BooleanMap$Entry<K>): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Object2BooleanMap$Entry<K>;
    previous(): Object2BooleanMap$Entry<K>;
    remove(): void;
    set(arg0: Object2BooleanMap$Entry<K>): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}