import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object2ByteRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ByteRBTreeMap$KeyIterator extends Object2ByteRBTreeMap$TreeIterator implements ObjectListIterator<K> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: Object)
    add<K extends unknown>(arg0: K): void;
    next<K extends unknown>(): K;
    previous<K extends unknown>(): K;
    remove(): void;
    set<K extends unknown>(arg0: K): void;
}