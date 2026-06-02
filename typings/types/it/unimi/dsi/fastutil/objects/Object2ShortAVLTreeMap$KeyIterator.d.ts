import type { Object2ShortAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortAVLTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ShortAVLTreeMap$KeyIterator extends Object2ShortAVLTreeMap$TreeIterator implements ObjectListIterator<K> {
    constructor(null_: Object2ShortAVLTreeMap$KeyIterator)
    constructor(null_: Object2ShortAVLTreeMap$KeyIterator)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next<K extends Object | number | string | boolean>(): K;
    previous<K extends Object | number | string | boolean>(): K;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}