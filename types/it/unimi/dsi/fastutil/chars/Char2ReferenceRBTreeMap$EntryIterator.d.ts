import type { Char2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceMap$Entry.d.ts'
import type { Char2ReferenceRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ReferenceRBTreeMap$EntryIterator extends Char2ReferenceRBTreeMap$TreeIterator implements ObjectListIterator<Char2ReferenceMap$Entry<V>> {
    constructor(null_: Char2ReferenceRBTreeMap$EntryIterator)
    constructor(null_: Char2ReferenceRBTreeMap$EntryIterator, arg1: string)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Char2ReferenceMap$Entry<V>;
    previous(): Char2ReferenceMap$Entry<V>;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}