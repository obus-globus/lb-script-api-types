import type { Float2ReferenceAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceAVLTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ReferenceAVLTreeMap$ValueIterator extends Float2ReferenceAVLTreeMap$TreeIterator implements ObjectListIterator<V> {
    private constructor(null_: Float2ReferenceAVLTreeMap$ValueIterator)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next<V extends Object | number | string | boolean>(): V;
    previous<V extends Object | number | string | boolean>(): V;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}