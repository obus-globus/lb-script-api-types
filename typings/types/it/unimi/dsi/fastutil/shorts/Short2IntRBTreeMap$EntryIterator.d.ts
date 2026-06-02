import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2IntMap$Entry.d.ts'
import type { Short2IntRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2IntRBTreeMap$TreeIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2IntRBTreeMap$EntryIterator extends Short2IntRBTreeMap$TreeIterator implements ObjectListIterator<Short2IntMap$Entry> {
    constructor(null_: Short2IntRBTreeMap$EntryIterator)
    constructor(null_: Short2IntRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Short2IntMap$Entry;
    previous(): Short2IntMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}