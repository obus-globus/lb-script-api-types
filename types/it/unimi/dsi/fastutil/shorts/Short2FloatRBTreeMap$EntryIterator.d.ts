import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2FloatMap$Entry.d.ts'
import type { Short2FloatRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2FloatRBTreeMap$TreeIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2FloatRBTreeMap$EntryIterator extends Short2FloatRBTreeMap$TreeIterator implements ObjectListIterator<Short2FloatMap$Entry> {
    constructor(null_: Short2FloatRBTreeMap$EntryIterator)
    constructor(null_: Short2FloatRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Short2FloatMap$Entry;
    previous(): Short2FloatMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}