import type { Float2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceMap$Entry.d.ts'
import type { Float2ReferenceRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ReferenceRBTreeMap$EntryIterator extends Float2ReferenceRBTreeMap$TreeIterator implements ObjectListIterator<Float2ReferenceMap$Entry<V>> {
    constructor(null_: Float2ReferenceRBTreeMap$EntryIterator)
    constructor(null_: Float2ReferenceRBTreeMap$EntryIterator, arg1: number)
    add<V extends Object | number | string | boolean>(arg0: Float2ReferenceMap$Entry<V>): void;
    next<V extends Object | number | string | boolean>(): Float2ReferenceMap$Entry<V>;
    previous<V extends Object | number | string | boolean>(): Float2ReferenceMap$Entry<V>;
    remove(): void;
    set<V extends Object | number | string | boolean>(arg0: Float2ReferenceMap$Entry<V>): void;
}