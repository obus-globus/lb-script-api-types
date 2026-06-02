import type { Byte2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ByteMap$Entry.d.ts'
import type { Byte2ByteRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ByteRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ByteRBTreeMap$EntryIterator extends Byte2ByteRBTreeMap$TreeIterator implements ObjectListIterator<Byte2ByteMap$Entry> {
    constructor(null_: Byte2ByteRBTreeMap$EntryIterator)
    constructor(null_: Byte2ByteRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Byte2ByteMap$Entry;
    previous(): Byte2ByteMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}