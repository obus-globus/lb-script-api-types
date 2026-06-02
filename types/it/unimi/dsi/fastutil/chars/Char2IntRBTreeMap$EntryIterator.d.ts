import type { Char2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntMap$Entry.d.ts'
import type { Char2IntRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2IntRBTreeMap$EntryIterator extends Char2IntRBTreeMap$TreeIterator implements ObjectListIterator<Char2IntMap$Entry> {
    constructor(null_: Char2IntRBTreeMap$EntryIterator)
    constructor(null_: Char2IntRBTreeMap$EntryIterator, arg1: string)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Char2IntMap$Entry;
    previous(): Char2IntMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}