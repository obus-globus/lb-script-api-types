import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleMap$Entry.d.ts'
import type { Short2DoubleRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleRBTreeMap$TreeIterator.d.ts'
export class Short2DoubleRBTreeMap$EntryIterator extends Short2DoubleRBTreeMap$TreeIterator implements ObjectListIterator<Short2DoubleMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    add(arg0: Short2DoubleMap$Entry): void;
    next(): Short2DoubleMap$Entry;
    previous(): Short2DoubleMap$Entry;
    remove(): void;
    set(arg0: Short2DoubleMap$Entry): void;
}