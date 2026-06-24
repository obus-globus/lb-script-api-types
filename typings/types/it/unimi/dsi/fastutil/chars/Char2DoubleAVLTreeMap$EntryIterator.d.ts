import type { Char2DoubleAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleAVLTreeMap$TreeIterator.d.ts'
import type { Char2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Char2DoubleAVLTreeMap$EntryIterator extends Char2DoubleAVLTreeMap$TreeIterator implements ObjectListIterator<Char2DoubleMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: string)
    add(arg0: Char2DoubleMap$Entry): void;
    next(): Char2DoubleMap$Entry;
    previous(): Char2DoubleMap$Entry;
    remove(): void;
    set(arg0: Char2DoubleMap$Entry): void;
}