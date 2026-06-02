import type { Object2ByteAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteAVLTreeMap$TreeIterator.d.ts'
import type { Object2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ByteAVLTreeMap$EntryIterator extends Object2ByteAVLTreeMap$TreeIterator implements ObjectListIterator<Object2ByteMap$Entry<K>> {
    constructor(null_: Object2ByteAVLTreeMap$EntryIterator)
    constructor(null_: Object2ByteAVLTreeMap$EntryIterator)
    add(arg0: Object2ByteMap$Entry<K>): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Object2ByteMap$Entry<K>;
    previous(): Object2ByteMap$Entry<K>;
    remove(): void;
    set(arg0: Object2ByteMap$Entry<K>): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}