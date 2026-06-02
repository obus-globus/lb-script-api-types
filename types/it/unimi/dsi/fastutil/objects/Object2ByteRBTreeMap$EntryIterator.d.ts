import type { Object2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteMap$Entry.d.ts'
import type { Object2ByteRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ByteRBTreeMap$EntryIterator extends Object2ByteRBTreeMap$TreeIterator implements ObjectListIterator<Object2ByteMap$Entry<K>> {
    constructor(null_: Object2ByteRBTreeMap$EntryIterator)
    constructor(null_: Object2ByteRBTreeMap$EntryIterator)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Object2ByteMap$Entry<K>;
    previous(): Object2ByteMap$Entry<K>;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}