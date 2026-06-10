import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2LongAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2LongAVLTreeMap$TreeIterator.d.ts'
import type { Short2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2LongMap$Entry.d.ts'
export class Short2LongAVLTreeMap$EntryIterator extends Short2LongAVLTreeMap$TreeIterator implements ObjectListIterator<Short2LongMap$Entry> {
    constructor(null_: Short2LongAVLTreeMap$EntryIterator)
    constructor(null_: Short2LongAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Short2LongMap$Entry): void;
    next(): Short2LongMap$Entry;
    previous(): Short2LongMap$Entry;
    remove(): void;
    set(arg0: Short2LongMap$Entry): void;
}