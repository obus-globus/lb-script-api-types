import type { Float2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntMap$Entry.d.ts'
import type { Float2IntRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2IntRBTreeMap$EntryIterator extends Float2IntRBTreeMap$TreeIterator implements ObjectListIterator<Float2IntMap$Entry> {
    constructor(null_: Float2IntRBTreeMap$EntryIterator)
    constructor(null_: Float2IntRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Float2IntMap$Entry;
    previous(): Float2IntMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}