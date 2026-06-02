import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2LongMap$Entry.d.ts'
import type { Short2LongRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2LongRBTreeMap$TreeIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2LongRBTreeMap$EntryIterator extends Short2LongRBTreeMap$TreeIterator implements ObjectListIterator<Short2LongMap$Entry> {
    constructor(null_: Short2LongRBTreeMap$EntryIterator)
    constructor(null_: Short2LongRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Short2LongMap$Entry;
    previous(): Short2LongMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}