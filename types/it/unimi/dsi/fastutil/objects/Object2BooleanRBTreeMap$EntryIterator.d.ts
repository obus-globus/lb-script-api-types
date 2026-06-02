import type { Object2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanMap$Entry.d.ts'
import type { Object2BooleanRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2BooleanRBTreeMap$EntryIterator extends Object2BooleanRBTreeMap$TreeIterator implements ObjectListIterator<Object2BooleanMap$Entry<K>> {
    constructor(null_: Object2BooleanRBTreeMap$EntryIterator)
    constructor(null_: Object2BooleanRBTreeMap$EntryIterator)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Object2BooleanMap$Entry<K>;
    previous(): Object2BooleanMap$Entry<K>;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}