import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ShortMap$Entry.d.ts'
import type { Short2ShortRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ShortRBTreeMap$TreeIterator.d.ts'
export class Short2ShortRBTreeMap$EntryIterator extends Short2ShortRBTreeMap$TreeIterator implements ObjectListIterator<Short2ShortMap$Entry> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    add(arg0: Short2ShortMap$Entry): void;
    next(): Short2ShortMap$Entry;
    previous(): Short2ShortMap$Entry;
    remove(): void;
    set(arg0: Short2ShortMap$Entry): void;
}