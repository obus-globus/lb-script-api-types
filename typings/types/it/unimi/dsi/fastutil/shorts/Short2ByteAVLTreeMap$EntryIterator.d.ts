import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2ByteAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ByteAVLTreeMap$TreeIterator.d.ts'
import type { Short2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ByteMap$Entry.d.ts'
export class Short2ByteAVLTreeMap$EntryIterator extends Short2ByteAVLTreeMap$TreeIterator implements ObjectListIterator<Short2ByteMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    add(arg0: Short2ByteMap$Entry): void;
    next(): Short2ByteMap$Entry;
    previous(): Short2ByteMap$Entry;
    remove(): void;
    set(arg0: Short2ByteMap$Entry): void;
}