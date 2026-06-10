import type { Float2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2BooleanMap$Entry.d.ts'
import type { Float2BooleanRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2BooleanRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Float2BooleanRBTreeMap$EntryIterator extends Float2BooleanRBTreeMap$TreeIterator implements ObjectListIterator<Float2BooleanMap$Entry> {
    constructor(null_: Float2BooleanRBTreeMap$EntryIterator)
    constructor(null_: Float2BooleanRBTreeMap$EntryIterator, arg1: number)
    add(arg0: Float2BooleanMap$Entry): void;
    next(): Float2BooleanMap$Entry;
    previous(): Float2BooleanMap$Entry;
    remove(): void;
    set(arg0: Float2BooleanMap$Entry): void;
}