import type { Object2IntRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2IntRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2IntRBTreeMap$KeyIterator extends Object2IntRBTreeMap$TreeIterator implements ObjectListIterator<K> {
    constructor(null_: Object2IntRBTreeMap$KeyIterator)
    constructor(null_: Object2IntRBTreeMap$KeyIterator)
    add<K extends unknown>(arg0: K): void;
    next<K extends unknown>(): K;
    previous<K extends unknown>(): K;
    remove(): void;
    set<K extends unknown>(arg0: K): void;
}