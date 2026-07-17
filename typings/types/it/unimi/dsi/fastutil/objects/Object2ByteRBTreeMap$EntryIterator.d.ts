import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteMap$Entry.d.ts'
import type { Object2ByteRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ByteRBTreeMap$EntryIterator extends Object2ByteRBTreeMap$TreeIterator implements ObjectListIterator<Object2ByteMap$Entry<K>> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: Object)
    add<K extends unknown>(arg0: Object2ByteMap$Entry<K>): void;
    next<K extends unknown>(): Object2ByteMap$Entry<K>;
    previous<K extends unknown>(): Object2ByteMap$Entry<K>;
    remove(): void;
    set<K extends unknown>(arg0: Object2ByteMap$Entry<K>): void;
}