import type { Double2ObjectRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ObjectRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ObjectRBTreeMap$ValueIterator extends Double2ObjectRBTreeMap$TreeIterator implements ObjectListIterator<V> {
    private constructor(null_: Double2ObjectRBTreeMap$ValueIterator)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next<V extends Object | number | string | boolean>(): V;
    previous<V extends Object | number | string | boolean>(): V;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}