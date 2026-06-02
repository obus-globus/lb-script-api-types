import type { Char2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharMap$Entry.d.ts'
import type { Char2CharRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2CharRBTreeMap$EntryIterator extends Char2CharRBTreeMap$TreeIterator implements ObjectListIterator<Char2CharMap$Entry> {
    constructor(null_: Char2CharRBTreeMap$EntryIterator)
    constructor(null_: Char2CharRBTreeMap$EntryIterator, arg1: string)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Char2CharMap$Entry;
    previous(): Char2CharMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}