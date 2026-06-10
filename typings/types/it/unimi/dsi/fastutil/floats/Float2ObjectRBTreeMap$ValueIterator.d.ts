import type { Float2ObjectRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ObjectRBTreeMap$ValueIterator extends Float2ObjectRBTreeMap$TreeIterator implements ObjectListIterator<V> {
    private constructor(null_: Float2ObjectRBTreeMap$ValueIterator)
    add<V extends Object | number | string | boolean>(arg0: V): void;
    next<V extends Object | number | string | boolean>(): V;
    previous<V extends Object | number | string | boolean>(): V;
    remove(): void;
    set<V extends Object | number | string | boolean>(arg0: V): void;
}