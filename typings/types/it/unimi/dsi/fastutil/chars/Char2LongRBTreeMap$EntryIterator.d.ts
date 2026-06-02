import type { Char2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2LongMap$Entry.d.ts'
import type { Char2LongRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2LongRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2LongRBTreeMap$EntryIterator extends Char2LongRBTreeMap$TreeIterator implements ObjectListIterator<Char2LongMap$Entry> {
    constructor(null_: Char2LongRBTreeMap$EntryIterator)
    constructor(null_: Char2LongRBTreeMap$EntryIterator, arg1: string)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Char2LongMap$Entry;
    previous(): Char2LongMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}