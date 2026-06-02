import type { Int2FloatAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatAVLTreeMap$TreeIterator.d.ts'
import type { Int2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2FloatAVLTreeMap$EntryIterator extends Int2FloatAVLTreeMap$TreeIterator implements ObjectListIterator<Int2FloatMap$Entry> {
    constructor(null_: Int2FloatAVLTreeMap$EntryIterator)
    constructor(null_: Int2FloatAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Int2FloatMap$Entry): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Int2FloatMap$Entry;
    previous(): Int2FloatMap$Entry;
    remove(): void;
    set(arg0: Int2FloatMap$Entry): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}