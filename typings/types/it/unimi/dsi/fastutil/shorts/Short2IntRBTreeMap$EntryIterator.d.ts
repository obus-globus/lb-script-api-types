import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2IntMap$Entry.d.ts'
import type { Short2IntRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2IntRBTreeMap$TreeIterator.d.ts'
export class Short2IntRBTreeMap$EntryIterator extends Short2IntRBTreeMap$TreeIterator implements ObjectListIterator<Short2IntMap$Entry> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    add(arg0: Short2IntMap$Entry): void;
    next(): Short2IntMap$Entry;
    previous(): Short2IntMap$Entry;
    remove(): void;
    set(arg0: Short2IntMap$Entry): void;
}