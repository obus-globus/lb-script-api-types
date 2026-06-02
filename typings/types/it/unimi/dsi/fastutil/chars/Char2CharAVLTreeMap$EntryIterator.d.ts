import type { Char2CharAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharAVLTreeMap$TreeIterator.d.ts'
import type { Char2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2CharAVLTreeMap$EntryIterator extends Char2CharAVLTreeMap$TreeIterator implements ObjectListIterator<Char2CharMap$Entry> {
    constructor(null_: Char2CharAVLTreeMap$EntryIterator)
    constructor(null_: Char2CharAVLTreeMap$EntryIterator, arg1: string)
    add(arg0: Char2CharMap$Entry): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Char2CharMap$Entry;
    previous(): Char2CharMap$Entry;
    remove(): void;
    set(arg0: Char2CharMap$Entry): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}