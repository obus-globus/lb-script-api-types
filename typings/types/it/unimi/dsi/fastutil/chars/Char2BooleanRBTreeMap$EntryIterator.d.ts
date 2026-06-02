import type { Char2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanMap$Entry.d.ts'
import type { Char2BooleanRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2BooleanRBTreeMap$EntryIterator extends Char2BooleanRBTreeMap$TreeIterator implements ObjectListIterator<Char2BooleanMap$Entry> {
    constructor(null_: Char2BooleanRBTreeMap$EntryIterator)
    constructor(null_: Char2BooleanRBTreeMap$EntryIterator, arg1: string)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Char2BooleanMap$Entry;
    previous(): Char2BooleanMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}