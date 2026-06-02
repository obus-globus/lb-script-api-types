import type { Int2CharAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharAVLTreeMap$TreeIterator.d.ts'
import type { Int2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2CharAVLTreeMap$EntryIterator extends Int2CharAVLTreeMap$TreeIterator implements ObjectListIterator<Int2CharMap$Entry> {
    constructor(null_: Int2CharAVLTreeMap$EntryIterator)
    constructor(null_: Int2CharAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Int2CharMap$Entry): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Int2CharMap$Entry;
    previous(): Int2CharMap$Entry;
    remove(): void;
    set(arg0: Int2CharMap$Entry): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}