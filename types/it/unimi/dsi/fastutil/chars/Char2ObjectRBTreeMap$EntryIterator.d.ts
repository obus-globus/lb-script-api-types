import type { Char2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectMap$Entry.d.ts'
import type { Char2ObjectRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ObjectRBTreeMap$EntryIterator extends Char2ObjectRBTreeMap$TreeIterator implements ObjectListIterator<Char2ObjectMap$Entry<V>> {
    constructor(null_: Char2ObjectRBTreeMap$EntryIterator)
    constructor(null_: Char2ObjectRBTreeMap$EntryIterator, arg1: string)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Char2ObjectMap$Entry<V>;
    previous(): Char2ObjectMap$Entry<V>;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}