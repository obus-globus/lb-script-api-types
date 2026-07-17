import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object2ObjectRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ObjectRBTreeMap$ValueIterator extends Object2ObjectRBTreeMap$TreeIterator implements ObjectListIterator<V> {
    private constructor(null_: JavaMap<Object, Object>)
    add<V extends unknown>(arg0: V): void;
    next<V extends unknown>(): V;
    previous<V extends unknown>(): V;
    remove(): void;
    set<V extends unknown>(arg0: V): void;
}