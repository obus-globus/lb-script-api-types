import type { Int2LongAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongAVLTreeMap$TreeIterator.d.ts'
import type { Int2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Int2LongAVLTreeMap$EntryIterator extends Int2LongAVLTreeMap$TreeIterator implements ObjectListIterator<Int2LongMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    add(arg0: Int2LongMap$Entry): void;
    next(): Int2LongMap$Entry;
    previous(): Int2LongMap$Entry;
    remove(): void;
    set(arg0: Int2LongMap$Entry): void;
}