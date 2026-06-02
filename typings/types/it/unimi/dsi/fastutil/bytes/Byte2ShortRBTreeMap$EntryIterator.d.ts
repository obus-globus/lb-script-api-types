import type { Byte2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ShortMap$Entry.d.ts'
import type { Byte2ShortRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ShortRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ShortRBTreeMap$EntryIterator extends Byte2ShortRBTreeMap$TreeIterator implements ObjectListIterator<Byte2ShortMap$Entry> {
    constructor(null_: Byte2ShortRBTreeMap$EntryIterator)
    constructor(null_: Byte2ShortRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Byte2ShortMap$Entry;
    previous(): Byte2ShortMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}