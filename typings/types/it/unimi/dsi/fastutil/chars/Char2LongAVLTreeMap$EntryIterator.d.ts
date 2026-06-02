import type { Char2LongAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2LongAVLTreeMap$TreeIterator.d.ts'
import type { Char2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2LongMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2LongAVLTreeMap$EntryIterator extends Char2LongAVLTreeMap$TreeIterator implements ObjectListIterator<Char2LongMap$Entry> {
    constructor(null_: Char2LongAVLTreeMap$EntryIterator)
    constructor(null_: Char2LongAVLTreeMap$EntryIterator, arg1: string)
    add(arg0: Char2LongMap$Entry): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Char2LongMap$Entry;
    previous(): Char2LongMap$Entry;
    remove(): void;
    set(arg0: Char2LongMap$Entry): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}