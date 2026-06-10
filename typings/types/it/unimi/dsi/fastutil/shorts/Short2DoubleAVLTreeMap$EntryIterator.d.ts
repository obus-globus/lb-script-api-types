import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2DoubleAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleAVLTreeMap$TreeIterator.d.ts'
import type { Short2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleMap$Entry.d.ts'
export class Short2DoubleAVLTreeMap$EntryIterator extends Short2DoubleAVLTreeMap$TreeIterator implements ObjectListIterator<Short2DoubleMap$Entry> {
    constructor(null_: Short2DoubleAVLTreeMap$EntryIterator)
    constructor(null_: Short2DoubleAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Short2DoubleMap$Entry): void;
    next(): Short2DoubleMap$Entry;
    previous(): Short2DoubleMap$Entry;
    remove(): void;
    set(arg0: Short2DoubleMap$Entry): void;
}