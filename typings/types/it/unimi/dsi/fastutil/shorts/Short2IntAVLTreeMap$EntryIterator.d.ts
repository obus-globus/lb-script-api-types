import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2IntAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2IntAVLTreeMap$TreeIterator.d.ts'
import type { Short2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2IntMap$Entry.d.ts'
export class Short2IntAVLTreeMap$EntryIterator extends Short2IntAVLTreeMap$TreeIterator implements ObjectListIterator<Short2IntMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    add(arg0: Short2IntMap$Entry): void;
    next(): Short2IntMap$Entry;
    previous(): Short2IntMap$Entry;
    remove(): void;
    set(arg0: Short2IntMap$Entry): void;
}