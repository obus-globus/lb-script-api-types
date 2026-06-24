import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2LongMap$Entry.d.ts'
import type { Short2LongRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2LongRBTreeMap$TreeIterator.d.ts'
export class Short2LongRBTreeMap$EntryIterator extends Short2LongRBTreeMap$TreeIterator implements ObjectListIterator<Short2LongMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    add(arg0: Short2LongMap$Entry): void;
    next(): Short2LongMap$Entry;
    previous(): Short2LongMap$Entry;
    remove(): void;
    set(arg0: Short2LongMap$Entry): void;
}