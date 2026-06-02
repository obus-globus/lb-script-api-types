import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2ReferenceRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceRBTreeMap$TreeIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ReferenceRBTreeMap$ValueIterator extends Short2ReferenceRBTreeMap$TreeIterator implements ObjectListIterator<V> {
    private constructor(null_: Short2ReferenceRBTreeMap$ValueIterator)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next<V extends Object | number | string | boolean>(): V;
    previous<V extends Object | number | string | boolean>(): V;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}