import type { Float2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2DoubleMap$Entry.d.ts'
import type { Float2DoubleRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2DoubleRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2DoubleRBTreeMap$EntryIterator extends Float2DoubleRBTreeMap$TreeIterator implements ObjectListIterator<Float2DoubleMap$Entry> {
    constructor(null_: Float2DoubleRBTreeMap$EntryIterator)
    constructor(null_: Float2DoubleRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Float2DoubleMap$Entry;
    previous(): Float2DoubleMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}