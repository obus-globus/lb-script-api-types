import type { Char2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntMap$Entry.d.ts'
import type { Char2IntRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Char2IntRBTreeMap$EntryIterator extends Char2IntRBTreeMap$TreeIterator implements ObjectListIterator<Char2IntMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: string)
    add(arg0: Char2IntMap$Entry): void;
    next(): Char2IntMap$Entry;
    previous(): Char2IntMap$Entry;
    remove(): void;
    set(arg0: Char2IntMap$Entry): void;
}