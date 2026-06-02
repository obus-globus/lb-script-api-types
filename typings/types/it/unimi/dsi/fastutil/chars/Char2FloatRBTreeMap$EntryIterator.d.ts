import type { Char2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatMap$Entry.d.ts'
import type { Char2FloatRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2FloatRBTreeMap$EntryIterator extends Char2FloatRBTreeMap$TreeIterator implements ObjectListIterator<Char2FloatMap$Entry> {
    constructor(null_: Char2FloatRBTreeMap$EntryIterator)
    constructor(null_: Char2FloatRBTreeMap$EntryIterator, arg1: string)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Char2FloatMap$Entry;
    previous(): Char2FloatMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}