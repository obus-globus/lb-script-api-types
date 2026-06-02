import type { Char2FloatAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatAVLTreeMap$TreeIterator.d.ts'
import type { Char2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2FloatAVLTreeMap$EntryIterator extends Char2FloatAVLTreeMap$TreeIterator implements ObjectListIterator<Char2FloatMap$Entry> {
    constructor(null_: Char2FloatAVLTreeMap$EntryIterator)
    constructor(null_: Char2FloatAVLTreeMap$EntryIterator, arg1: string)
    add(arg0: Char2FloatMap$Entry): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Char2FloatMap$Entry;
    previous(): Char2FloatMap$Entry;
    remove(): void;
    set(arg0: Char2FloatMap$Entry): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}