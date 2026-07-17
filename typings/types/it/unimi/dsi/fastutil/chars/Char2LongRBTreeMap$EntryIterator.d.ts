import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Char2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2LongMap$Entry.d.ts'
import type { Char2LongRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2LongRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Char2LongRBTreeMap$EntryIterator extends Char2LongRBTreeMap$TreeIterator implements ObjectListIterator<Char2LongMap$Entry> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: string)
    add(arg0: Char2LongMap$Entry): void;
    next(): Char2LongMap$Entry;
    previous(): Char2LongMap$Entry;
    remove(): void;
    set(arg0: Char2LongMap$Entry): void;
}