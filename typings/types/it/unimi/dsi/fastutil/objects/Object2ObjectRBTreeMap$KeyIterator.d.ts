import type { Object2ObjectRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ObjectRBTreeMap$KeyIterator extends Object2ObjectRBTreeMap$TreeIterator implements ObjectListIterator<K> {
    constructor(null_: Object2ObjectRBTreeMap$KeyIterator)
    constructor(null_: Object2ObjectRBTreeMap$KeyIterator)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next<K extends Object | number | string | boolean>(): K;
    previous<K extends Object | number | string | boolean>(): K;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}