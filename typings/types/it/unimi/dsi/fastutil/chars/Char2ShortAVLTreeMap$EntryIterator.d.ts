import type { Char2ShortAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ShortAVLTreeMap$TreeIterator.d.ts'
import type { Char2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ShortMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Char2ShortAVLTreeMap$EntryIterator extends Char2ShortAVLTreeMap$TreeIterator implements ObjectListIterator<Char2ShortMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: string)
    add(arg0: Char2ShortMap$Entry): void;
    next(): Char2ShortMap$Entry;
    previous(): Char2ShortMap$Entry;
    remove(): void;
    set(arg0: Char2ShortMap$Entry): void;
}