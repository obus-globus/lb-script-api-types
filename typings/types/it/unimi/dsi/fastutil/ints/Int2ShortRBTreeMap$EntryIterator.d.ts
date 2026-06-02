import type { Int2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ShortMap$Entry.d.ts'
import type { Int2ShortRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ShortRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ShortRBTreeMap$EntryIterator extends Int2ShortRBTreeMap$TreeIterator implements ObjectListIterator<Int2ShortMap$Entry> {
    constructor(null_: Int2ShortRBTreeMap$EntryIterator)
    constructor(null_: Int2ShortRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Int2ShortMap$Entry;
    previous(): Int2ShortMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}