import type { Char2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleMap$Entry.d.ts'
import type { Char2DoubleRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Char2DoubleRBTreeMap$EntryIterator extends Char2DoubleRBTreeMap$TreeIterator implements ObjectListIterator<Char2DoubleMap$Entry> {
    constructor(null_: Char2DoubleRBTreeMap$EntryIterator)
    constructor(null_: Char2DoubleRBTreeMap$EntryIterator, arg1: string)
    add(arg0: Char2DoubleMap$Entry): void;
    next(): Char2DoubleMap$Entry;
    previous(): Char2DoubleMap$Entry;
    remove(): void;
    set(arg0: Char2DoubleMap$Entry): void;
}