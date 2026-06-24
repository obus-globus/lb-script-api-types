import type { Char2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatMap$Entry.d.ts'
import type { Char2FloatRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Char2FloatRBTreeMap$EntryIterator extends Char2FloatRBTreeMap$TreeIterator implements ObjectListIterator<Char2FloatMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: string)
    add(arg0: Char2FloatMap$Entry): void;
    next(): Char2FloatMap$Entry;
    previous(): Char2FloatMap$Entry;
    remove(): void;
    set(arg0: Char2FloatMap$Entry): void;
}