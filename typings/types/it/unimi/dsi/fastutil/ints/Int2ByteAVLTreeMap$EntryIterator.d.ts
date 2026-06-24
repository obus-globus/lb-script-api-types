import type { Int2ByteAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ByteAVLTreeMap$TreeIterator.d.ts'
import type { Int2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ByteMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Int2ByteAVLTreeMap$EntryIterator extends Int2ByteAVLTreeMap$TreeIterator implements ObjectListIterator<Int2ByteMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    add(arg0: Int2ByteMap$Entry): void;
    next(): Int2ByteMap$Entry;
    previous(): Int2ByteMap$Entry;
    remove(): void;
    set(arg0: Int2ByteMap$Entry): void;
}