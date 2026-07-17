import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Char2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanMap$Entry.d.ts'
import type { Char2BooleanRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Char2BooleanRBTreeMap$EntryIterator extends Char2BooleanRBTreeMap$TreeIterator implements ObjectListIterator<Char2BooleanMap$Entry> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: string)
    add(arg0: Char2BooleanMap$Entry): void;
    next(): Char2BooleanMap$Entry;
    previous(): Char2BooleanMap$Entry;
    remove(): void;
    set(arg0: Char2BooleanMap$Entry): void;
}