import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharMap$Entry.d.ts'
import type { Short2CharRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharRBTreeMap$TreeIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2CharRBTreeMap$EntryIterator extends Short2CharRBTreeMap$TreeIterator implements ObjectListIterator<Short2CharMap$Entry> {
    constructor(null_: Short2CharRBTreeMap$EntryIterator)
    constructor(null_: Short2CharRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Short2CharMap$Entry;
    previous(): Short2CharMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}