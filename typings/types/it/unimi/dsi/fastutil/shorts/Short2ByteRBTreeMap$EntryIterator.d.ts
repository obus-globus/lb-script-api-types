import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ByteMap$Entry.d.ts'
import type { Short2ByteRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ByteRBTreeMap$TreeIterator.d.ts'
export class Short2ByteRBTreeMap$EntryIterator extends Short2ByteRBTreeMap$TreeIterator implements ObjectListIterator<Short2ByteMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    add(arg0: Short2ByteMap$Entry): void;
    next(): Short2ByteMap$Entry;
    previous(): Short2ByteMap$Entry;
    remove(): void;
    set(arg0: Short2ByteMap$Entry): void;
}