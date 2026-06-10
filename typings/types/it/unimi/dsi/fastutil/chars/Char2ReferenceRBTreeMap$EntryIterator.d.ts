import type { Char2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceMap$Entry.d.ts'
import type { Char2ReferenceRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ReferenceRBTreeMap$EntryIterator extends Char2ReferenceRBTreeMap$TreeIterator implements ObjectListIterator<Char2ReferenceMap$Entry<V>> {
    constructor(null_: Char2ReferenceRBTreeMap$EntryIterator)
    constructor(null_: Char2ReferenceRBTreeMap$EntryIterator, arg1: string)
    add<V extends Object | number | string | boolean>(arg0: Char2ReferenceMap$Entry<V>): void;
    next<V extends Object | number | string | boolean>(): Char2ReferenceMap$Entry<V>;
    previous<V extends Object | number | string | boolean>(): Char2ReferenceMap$Entry<V>;
    remove(): void;
    set<V extends Object | number | string | boolean>(arg0: Char2ReferenceMap$Entry<V>): void;
}