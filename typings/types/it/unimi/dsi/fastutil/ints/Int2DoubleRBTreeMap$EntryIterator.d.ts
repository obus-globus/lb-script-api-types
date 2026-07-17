import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Int2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2DoubleMap$Entry.d.ts'
import type { Int2DoubleRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2DoubleRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Int2DoubleRBTreeMap$EntryIterator extends Int2DoubleRBTreeMap$TreeIterator implements ObjectListIterator<Int2DoubleMap$Entry> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    add(arg0: Int2DoubleMap$Entry): void;
    next(): Int2DoubleMap$Entry;
    previous(): Int2DoubleMap$Entry;
    remove(): void;
    set(arg0: Int2DoubleMap$Entry): void;
}