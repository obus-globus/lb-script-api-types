import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Int2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharMap$Entry.d.ts'
import type { Int2CharRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Int2CharRBTreeMap$EntryIterator extends Int2CharRBTreeMap$TreeIterator implements ObjectListIterator<Int2CharMap$Entry> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    add(arg0: Int2CharMap$Entry): void;
    next(): Int2CharMap$Entry;
    previous(): Int2CharMap$Entry;
    remove(): void;
    set(arg0: Int2CharMap$Entry): void;
}