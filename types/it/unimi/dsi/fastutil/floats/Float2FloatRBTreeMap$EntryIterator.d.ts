import type { Float2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2FloatMap$Entry.d.ts'
import type { Float2FloatRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2FloatRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2FloatRBTreeMap$EntryIterator extends Float2FloatRBTreeMap$TreeIterator implements ObjectListIterator<Float2FloatMap$Entry> {
    constructor(null_: Float2FloatRBTreeMap$EntryIterator)
    constructor(null_: Float2FloatRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Float2FloatMap$Entry;
    previous(): Float2FloatMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}