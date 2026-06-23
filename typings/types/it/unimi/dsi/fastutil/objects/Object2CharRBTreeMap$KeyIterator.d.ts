import type { Object2CharRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2CharRBTreeMap$KeyIterator extends Object2CharRBTreeMap$TreeIterator implements ObjectListIterator<K> {
    constructor(null_: Object2CharRBTreeMap$KeyIterator)
    constructor(null_: Object2CharRBTreeMap$KeyIterator)
    add<K extends unknown>(arg0: K): void;
    next<K extends unknown>(): K;
    previous<K extends unknown>(): K;
    remove(): void;
    set<K extends unknown>(arg0: K): void;
}