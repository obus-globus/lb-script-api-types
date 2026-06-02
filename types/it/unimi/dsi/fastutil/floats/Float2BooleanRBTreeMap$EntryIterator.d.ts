import type { Float2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2BooleanMap$Entry.d.ts'
import type { Float2BooleanRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2BooleanRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2BooleanRBTreeMap$EntryIterator extends Float2BooleanRBTreeMap$TreeIterator implements ObjectListIterator<Float2BooleanMap$Entry> {
    constructor(null_: Float2BooleanRBTreeMap$EntryIterator)
    constructor(null_: Float2BooleanRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Float2BooleanMap$Entry;
    previous(): Float2BooleanMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}