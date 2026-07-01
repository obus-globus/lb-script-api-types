import type { Object2ReferenceAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceAVLTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ReferenceAVLTreeMap$KeyIterator extends Object2ReferenceAVLTreeMap$TreeIterator implements ObjectListIterator<K> {
    constructor(null_: Map<Object, Object>)
    constructor(null_: Map<Object, Object>, arg1: Object)
    add<K extends unknown>(arg0: K): void;
    next<K extends unknown>(): K;
    previous<K extends unknown>(): K;
    remove(): void;
    set<K extends unknown>(arg0: K): void;
}