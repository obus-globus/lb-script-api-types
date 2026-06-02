import type { Float2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2LongMap$Entry.d.ts'
import type { Float2LongRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2LongRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2LongRBTreeMap$EntryIterator extends Float2LongRBTreeMap$TreeIterator implements ObjectListIterator<Float2LongMap$Entry> {
    constructor(null_: Float2LongRBTreeMap$EntryIterator)
    constructor(null_: Float2LongRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Float2LongMap$Entry;
    previous(): Float2LongMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}