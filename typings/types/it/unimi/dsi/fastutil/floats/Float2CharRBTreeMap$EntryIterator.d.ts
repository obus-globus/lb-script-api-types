import type { Float2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharMap$Entry.d.ts'
import type { Float2CharRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2CharRBTreeMap$EntryIterator extends Float2CharRBTreeMap$TreeIterator implements ObjectListIterator<Float2CharMap$Entry> {
    constructor(null_: Float2CharRBTreeMap$EntryIterator)
    constructor(null_: Float2CharRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Float2CharMap$Entry;
    previous(): Float2CharMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}