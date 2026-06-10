import type { Char2BooleanAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanAVLTreeMap$TreeIterator.d.ts'
import type { Char2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Char2BooleanAVLTreeMap$EntryIterator extends Char2BooleanAVLTreeMap$TreeIterator implements ObjectListIterator<Char2BooleanMap$Entry> {
    constructor(null_: Char2BooleanAVLTreeMap$EntryIterator)
    constructor(null_: Char2BooleanAVLTreeMap$EntryIterator, arg1: string)
    add(arg0: Char2BooleanMap$Entry): void;
    next(): Char2BooleanMap$Entry;
    previous(): Char2BooleanMap$Entry;
    remove(): void;
    set(arg0: Char2BooleanMap$Entry): void;
}