import type { Int2IntAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2IntAVLTreeMap$TreeIterator.d.ts'
import type { Int2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2IntMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2IntAVLTreeMap$EntryIterator extends Int2IntAVLTreeMap$TreeIterator implements ObjectListIterator<Int2IntMap$Entry> {
    constructor(null_: Int2IntAVLTreeMap$EntryIterator)
    constructor(null_: Int2IntAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Int2IntMap$Entry): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Int2IntMap$Entry;
    previous(): Int2IntMap$Entry;
    remove(): void;
    set(arg0: Int2IntMap$Entry): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}