import type { Object2ReferenceAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceAVLTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ReferenceAVLTreeMap$ValueIterator extends Object2ReferenceAVLTreeMap$TreeIterator implements ObjectListIterator<V> {
    private constructor(null_: Object2ReferenceAVLTreeMap$ValueIterator)
    add<V extends unknown>(arg0: V): void;
    next<V extends unknown>(): V;
    previous<V extends unknown>(): V;
    remove(): void;
    set<V extends unknown>(arg0: V): void;
}