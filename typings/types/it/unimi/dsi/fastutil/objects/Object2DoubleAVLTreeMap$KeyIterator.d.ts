import type { Object2DoubleAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleAVLTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2DoubleAVLTreeMap$KeyIterator extends Object2DoubleAVLTreeMap$TreeIterator implements ObjectListIterator<K> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: K)
    add<K extends unknown>(arg0: K): void;
    next<K extends unknown>(): K;
    previous<K extends unknown>(): K;
    remove(): void;
    set<K extends unknown>(arg0: K): void;
}