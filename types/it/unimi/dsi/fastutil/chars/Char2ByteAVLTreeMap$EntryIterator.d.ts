import type { Char2ByteAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteAVLTreeMap$TreeIterator.d.ts'
import type { Char2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ByteAVLTreeMap$EntryIterator extends Char2ByteAVLTreeMap$TreeIterator implements ObjectListIterator<Char2ByteMap$Entry> {
    constructor(null_: Char2ByteAVLTreeMap$EntryIterator)
    constructor(null_: Char2ByteAVLTreeMap$EntryIterator, arg1: string)
    add(arg0: Char2ByteMap$Entry): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Char2ByteMap$Entry;
    previous(): Char2ByteMap$Entry;
    remove(): void;
    set(arg0: Char2ByteMap$Entry): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}