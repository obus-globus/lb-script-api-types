import type { Byte2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2LongMap$Entry.d.ts'
import type { Byte2LongRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2LongRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2LongRBTreeMap$EntryIterator extends Byte2LongRBTreeMap$TreeIterator implements ObjectListIterator<Byte2LongMap$Entry> {
    constructor(null_: Byte2LongRBTreeMap$EntryIterator)
    constructor(null_: Byte2LongRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Byte2LongMap$Entry;
    previous(): Byte2LongMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}