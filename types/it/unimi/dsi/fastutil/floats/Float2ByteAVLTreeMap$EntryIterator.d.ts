import type { Float2ByteAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ByteAVLTreeMap$TreeIterator.d.ts'
import type { Float2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ByteMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ByteAVLTreeMap$EntryIterator extends Float2ByteAVLTreeMap$TreeIterator implements ObjectListIterator<Float2ByteMap$Entry> {
    constructor(null_: Float2ByteAVLTreeMap$EntryIterator)
    constructor(null_: Float2ByteAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Float2ByteMap$Entry): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Float2ByteMap$Entry;
    previous(): Float2ByteMap$Entry;
    remove(): void;
    set(arg0: Float2ByteMap$Entry): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}