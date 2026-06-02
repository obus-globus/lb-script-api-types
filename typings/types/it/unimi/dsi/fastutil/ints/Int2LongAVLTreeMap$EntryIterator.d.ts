import type { Int2LongAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongAVLTreeMap$TreeIterator.d.ts'
import type { Int2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2LongAVLTreeMap$EntryIterator extends Int2LongAVLTreeMap$TreeIterator implements ObjectListIterator<Int2LongMap$Entry> {
    constructor(null_: Int2LongAVLTreeMap$EntryIterator)
    constructor(null_: Int2LongAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Int2LongMap$Entry): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Int2LongMap$Entry;
    previous(): Int2LongMap$Entry;
    remove(): void;
    set(arg0: Int2LongMap$Entry): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}