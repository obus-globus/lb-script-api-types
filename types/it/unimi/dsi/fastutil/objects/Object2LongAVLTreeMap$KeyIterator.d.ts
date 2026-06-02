import type { Object2LongAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongAVLTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2LongAVLTreeMap$KeyIterator extends Object2LongAVLTreeMap$TreeIterator implements ObjectListIterator<K> {
    constructor(null_: Object2LongAVLTreeMap$KeyIterator)
    constructor(null_: Object2LongAVLTreeMap$KeyIterator)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next<K extends Object | number | string | boolean>(): K;
    previous<K extends Object | number | string | boolean>(): K;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}