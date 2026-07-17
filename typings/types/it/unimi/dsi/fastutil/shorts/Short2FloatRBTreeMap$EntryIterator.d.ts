import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2FloatMap$Entry.d.ts'
import type { Short2FloatRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2FloatRBTreeMap$TreeIterator.d.ts'
export class Short2FloatRBTreeMap$EntryIterator extends Short2FloatRBTreeMap$TreeIterator implements ObjectListIterator<Short2FloatMap$Entry> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    add(arg0: Short2FloatMap$Entry): void;
    next(): Short2FloatMap$Entry;
    previous(): Short2FloatMap$Entry;
    remove(): void;
    set(arg0: Short2FloatMap$Entry): void;
}