import type { Int2ShortAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ShortAVLTreeMap$TreeIterator.d.ts'
import type { Int2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ShortMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Int2ShortAVLTreeMap$EntryIterator extends Int2ShortAVLTreeMap$TreeIterator implements ObjectListIterator<Int2ShortMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    add(arg0: Int2ShortMap$Entry): void;
    next(): Int2ShortMap$Entry;
    previous(): Int2ShortMap$Entry;
    remove(): void;
    set(arg0: Int2ShortMap$Entry): void;
}