import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ByteMap$Entry.d.ts'
import type { Short2ByteRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ByteRBTreeMap$TreeIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ByteRBTreeMap$EntryIterator extends Short2ByteRBTreeMap$TreeIterator implements ObjectListIterator<Short2ByteMap$Entry> {
    constructor(null_: Short2ByteRBTreeMap$EntryIterator)
    constructor(null_: Short2ByteRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Short2ByteMap$Entry;
    previous(): Short2ByteMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}