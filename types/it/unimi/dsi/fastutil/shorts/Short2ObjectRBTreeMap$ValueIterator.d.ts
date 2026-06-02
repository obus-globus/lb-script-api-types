import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2ObjectRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectRBTreeMap$TreeIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ObjectRBTreeMap$ValueIterator extends Short2ObjectRBTreeMap$TreeIterator implements ObjectListIterator<V> {
    private constructor(null_: Short2ObjectRBTreeMap$ValueIterator)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next<V extends Object | number | string | boolean>(): V;
    previous<V extends Object | number | string | boolean>(): V;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}