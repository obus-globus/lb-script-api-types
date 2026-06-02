import type { Char2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ShortMap$Entry.d.ts'
import type { Char2ShortRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ShortRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ShortRBTreeMap$EntryIterator extends Char2ShortRBTreeMap$TreeIterator implements ObjectListIterator<Char2ShortMap$Entry> {
    constructor(null_: Char2ShortRBTreeMap$EntryIterator)
    constructor(null_: Char2ShortRBTreeMap$EntryIterator, arg1: string)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Char2ShortMap$Entry;
    previous(): Char2ShortMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}