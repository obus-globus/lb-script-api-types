import type { Int2CharAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharAVLTreeMap$TreeIterator.d.ts'
import type { Int2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Int2CharAVLTreeMap$EntryIterator extends Int2CharAVLTreeMap$TreeIterator implements ObjectListIterator<Int2CharMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    add(arg0: Int2CharMap$Entry): void;
    next(): Int2CharMap$Entry;
    previous(): Int2CharMap$Entry;
    remove(): void;
    set(arg0: Int2CharMap$Entry): void;
}