import type { Int2DoubleAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2DoubleAVLTreeMap$TreeIterator.d.ts'
import type { Int2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2DoubleMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2DoubleAVLTreeMap$EntryIterator extends Int2DoubleAVLTreeMap$TreeIterator implements ObjectListIterator<Int2DoubleMap$Entry> {
    constructor(null_: Int2DoubleAVLTreeMap$EntryIterator)
    constructor(null_: Int2DoubleAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Int2DoubleMap$Entry): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Int2DoubleMap$Entry;
    previous(): Int2DoubleMap$Entry;
    remove(): void;
    set(arg0: Int2DoubleMap$Entry): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}