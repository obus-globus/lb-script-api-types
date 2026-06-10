import type { Float2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ByteMap$Entry.d.ts'
import type { Float2ByteRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ByteRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Float2ByteRBTreeMap$EntryIterator extends Float2ByteRBTreeMap$TreeIterator implements ObjectListIterator<Float2ByteMap$Entry> {
    constructor(null_: Float2ByteRBTreeMap$EntryIterator)
    constructor(null_: Float2ByteRBTreeMap$EntryIterator, arg1: number)
    add(arg0: Float2ByteMap$Entry): void;
    next(): Float2ByteMap$Entry;
    previous(): Float2ByteMap$Entry;
    remove(): void;
    set(arg0: Float2ByteMap$Entry): void;
}