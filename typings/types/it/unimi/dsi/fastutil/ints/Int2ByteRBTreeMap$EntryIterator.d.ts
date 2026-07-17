import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Int2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ByteMap$Entry.d.ts'
import type { Int2ByteRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ByteRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Int2ByteRBTreeMap$EntryIterator extends Int2ByteRBTreeMap$TreeIterator implements ObjectListIterator<Int2ByteMap$Entry> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    add(arg0: Int2ByteMap$Entry): void;
    next(): Int2ByteMap$Entry;
    previous(): Int2ByteMap$Entry;
    remove(): void;
    set(arg0: Int2ByteMap$Entry): void;
}