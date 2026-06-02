import type { Int2ObjectRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ObjectRBTreeMap$ValueIterator extends Int2ObjectRBTreeMap$TreeIterator implements ObjectListIterator<V> {
    private constructor(null_: Int2ObjectRBTreeMap$ValueIterator)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next<V extends Object | number | string | boolean>(): V;
    previous<V extends Object | number | string | boolean>(): V;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}