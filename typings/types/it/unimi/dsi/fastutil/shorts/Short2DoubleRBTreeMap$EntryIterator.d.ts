import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleMap$Entry.d.ts'
import type { Short2DoubleRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleRBTreeMap$TreeIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2DoubleRBTreeMap$EntryIterator extends Short2DoubleRBTreeMap$TreeIterator implements ObjectListIterator<Short2DoubleMap$Entry> {
    constructor(null_: Short2DoubleRBTreeMap$EntryIterator)
    constructor(null_: Short2DoubleRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Short2DoubleMap$Entry;
    previous(): Short2DoubleMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}