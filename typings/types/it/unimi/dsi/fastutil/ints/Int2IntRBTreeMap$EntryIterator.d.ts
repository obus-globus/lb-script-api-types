import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Int2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2IntMap$Entry.d.ts'
import type { Int2IntRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2IntRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Int2IntRBTreeMap$EntryIterator extends Int2IntRBTreeMap$TreeIterator implements ObjectListIterator<Int2IntMap$Entry> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    add(arg0: Int2IntMap$Entry): void;
    next(): Int2IntMap$Entry;
    previous(): Int2IntMap$Entry;
    remove(): void;
    set(arg0: Int2IntMap$Entry): void;
}