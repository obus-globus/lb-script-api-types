import type { Char2ReferenceAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceAVLTreeMap$TreeIterator.d.ts'
import type { Char2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ReferenceAVLTreeMap$EntryIterator extends Char2ReferenceAVLTreeMap$TreeIterator implements ObjectListIterator<Char2ReferenceMap$Entry<V>> {
    constructor(null_: Char2ReferenceAVLTreeMap$EntryIterator)
    constructor(null_: Char2ReferenceAVLTreeMap$EntryIterator, arg1: string)
    add<V extends unknown>(arg0: Char2ReferenceMap$Entry<V>): void;
    next<V extends unknown>(): Char2ReferenceMap$Entry<V>;
    previous<V extends unknown>(): Char2ReferenceMap$Entry<V>;
    remove(): void;
    set<V extends unknown>(arg0: Char2ReferenceMap$Entry<V>): void;
}