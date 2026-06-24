import type { Char2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteMap$Entry.d.ts'
import type { Char2ByteRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Char2ByteRBTreeMap$EntryIterator extends Char2ByteRBTreeMap$TreeIterator implements ObjectListIterator<Char2ByteMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: string)
    add(arg0: Char2ByteMap$Entry): void;
    next(): Char2ByteMap$Entry;
    previous(): Char2ByteMap$Entry;
    remove(): void;
    set(arg0: Char2ByteMap$Entry): void;
}