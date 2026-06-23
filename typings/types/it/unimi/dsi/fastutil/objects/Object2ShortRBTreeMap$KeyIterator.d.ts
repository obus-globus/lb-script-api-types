import type { Object2ShortRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ShortRBTreeMap$KeyIterator extends Object2ShortRBTreeMap$TreeIterator implements ObjectListIterator<K> {
    constructor(null_: Object2ShortRBTreeMap$KeyIterator)
    constructor(null_: Object2ShortRBTreeMap$KeyIterator)
    add<K extends unknown>(arg0: K): void;
    next<K extends unknown>(): K;
    previous<K extends unknown>(): K;
    remove(): void;
    set<K extends unknown>(arg0: K): void;
}