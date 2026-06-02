import type { Char2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteMap$Entry.d.ts'
import type { Char2ByteRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ByteRBTreeMap$EntryIterator extends Char2ByteRBTreeMap$TreeIterator implements ObjectListIterator<Char2ByteMap$Entry> {
    constructor(null_: Char2ByteRBTreeMap$EntryIterator)
    constructor(null_: Char2ByteRBTreeMap$EntryIterator, arg1: string)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Char2ByteMap$Entry;
    previous(): Char2ByteMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}