import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Int2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2BooleanMap$Entry.d.ts'
import type { Int2BooleanRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2BooleanRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Int2BooleanRBTreeMap$EntryIterator extends Int2BooleanRBTreeMap$TreeIterator implements ObjectListIterator<Int2BooleanMap$Entry> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    add(arg0: Int2BooleanMap$Entry): void;
    next(): Int2BooleanMap$Entry;
    previous(): Int2BooleanMap$Entry;
    remove(): void;
    set(arg0: Int2BooleanMap$Entry): void;
}