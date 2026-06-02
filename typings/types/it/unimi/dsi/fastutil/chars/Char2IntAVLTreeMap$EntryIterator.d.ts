import type { Char2IntAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntAVLTreeMap$TreeIterator.d.ts'
import type { Char2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2IntAVLTreeMap$EntryIterator extends Char2IntAVLTreeMap$TreeIterator implements ObjectListIterator<Char2IntMap$Entry> {
    constructor(null_: Char2IntAVLTreeMap$EntryIterator)
    constructor(null_: Char2IntAVLTreeMap$EntryIterator, arg1: string)
    add(arg0: Char2IntMap$Entry): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Char2IntMap$Entry;
    previous(): Char2IntMap$Entry;
    remove(): void;
    set(arg0: Char2IntMap$Entry): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}