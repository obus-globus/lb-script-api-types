import type { Char2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleMap$Entry.d.ts'
import type { Char2DoubleRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2DoubleRBTreeMap$EntryIterator extends Char2DoubleRBTreeMap$TreeIterator implements ObjectListIterator<Char2DoubleMap$Entry> {
    constructor(null_: Char2DoubleRBTreeMap$EntryIterator)
    constructor(null_: Char2DoubleRBTreeMap$EntryIterator, arg1: string)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Char2DoubleMap$Entry;
    previous(): Char2DoubleMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}