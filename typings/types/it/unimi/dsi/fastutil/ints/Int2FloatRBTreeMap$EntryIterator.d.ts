import type { Int2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatMap$Entry.d.ts'
import type { Int2FloatRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Int2FloatRBTreeMap$EntryIterator extends Int2FloatRBTreeMap$TreeIterator implements ObjectListIterator<Int2FloatMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    add(arg0: Int2FloatMap$Entry): void;
    next(): Int2FloatMap$Entry;
    previous(): Int2FloatMap$Entry;
    remove(): void;
    set(arg0: Int2FloatMap$Entry): void;
}