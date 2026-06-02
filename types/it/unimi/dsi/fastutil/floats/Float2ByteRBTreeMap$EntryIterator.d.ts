import type { Float2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ByteMap$Entry.d.ts'
import type { Float2ByteRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ByteRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ByteRBTreeMap$EntryIterator extends Float2ByteRBTreeMap$TreeIterator implements ObjectListIterator<Float2ByteMap$Entry> {
    constructor(null_: Float2ByteRBTreeMap$EntryIterator)
    constructor(null_: Float2ByteRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Float2ByteMap$Entry;
    previous(): Float2ByteMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}