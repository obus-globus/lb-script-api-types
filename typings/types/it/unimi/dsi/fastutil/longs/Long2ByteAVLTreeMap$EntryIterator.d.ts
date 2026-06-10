import type { Long2ByteAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ByteAVLTreeMap$TreeIterator.d.ts'
import type { Long2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ByteMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Long2ByteAVLTreeMap$EntryIterator extends Long2ByteAVLTreeMap$TreeIterator implements ObjectListIterator<Long2ByteMap$Entry> {
    constructor(null_: Long2ByteAVLTreeMap$EntryIterator)
    constructor(null_: Long2ByteAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Long2ByteMap$Entry): void;
    next(): Long2ByteMap$Entry;
    previous(): Long2ByteMap$Entry;
    remove(): void;
    set(arg0: Long2ByteMap$Entry): void;
}