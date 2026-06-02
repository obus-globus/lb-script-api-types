import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2BooleanMap$Entry.d.ts'
import type { Short2BooleanRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2BooleanRBTreeMap$TreeIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2BooleanRBTreeMap$EntryIterator extends Short2BooleanRBTreeMap$TreeIterator implements ObjectListIterator<Short2BooleanMap$Entry> {
    constructor(null_: Short2BooleanRBTreeMap$EntryIterator)
    constructor(null_: Short2BooleanRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Short2BooleanMap$Entry;
    previous(): Short2BooleanMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}