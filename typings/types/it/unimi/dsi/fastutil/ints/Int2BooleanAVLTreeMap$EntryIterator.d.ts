import type { Int2BooleanAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2BooleanAVLTreeMap$TreeIterator.d.ts'
import type { Int2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2BooleanMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Int2BooleanAVLTreeMap$EntryIterator extends Int2BooleanAVLTreeMap$TreeIterator implements ObjectListIterator<Int2BooleanMap$Entry> {
    constructor(null_: Int2BooleanAVLTreeMap$EntryIterator)
    constructor(null_: Int2BooleanAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Int2BooleanMap$Entry): void;
    next(): Int2BooleanMap$Entry;
    previous(): Int2BooleanMap$Entry;
    remove(): void;
    set(arg0: Int2BooleanMap$Entry): void;
}