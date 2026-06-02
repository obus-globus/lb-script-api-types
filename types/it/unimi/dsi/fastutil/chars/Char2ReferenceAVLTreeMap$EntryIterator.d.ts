import type { Char2ReferenceAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceAVLTreeMap$TreeIterator.d.ts'
import type { Char2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ReferenceAVLTreeMap$EntryIterator extends Char2ReferenceAVLTreeMap$TreeIterator implements ObjectListIterator<Char2ReferenceMap$Entry<V>> {
    constructor(null_: Char2ReferenceAVLTreeMap$EntryIterator)
    constructor(null_: Char2ReferenceAVLTreeMap$EntryIterator, arg1: string)
    add(arg0: Char2ReferenceMap$Entry<V>): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Char2ReferenceMap$Entry<V>;
    previous(): Char2ReferenceMap$Entry<V>;
    remove(): void;
    set(arg0: Char2ReferenceMap$Entry<V>): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}