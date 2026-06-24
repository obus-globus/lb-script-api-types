import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2FloatAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2FloatAVLTreeMap$TreeIterator.d.ts'
import type { Short2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2FloatMap$Entry.d.ts'
export class Short2FloatAVLTreeMap$EntryIterator extends Short2FloatAVLTreeMap$TreeIterator implements ObjectListIterator<Short2FloatMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    add(arg0: Short2FloatMap$Entry): void;
    next(): Short2FloatMap$Entry;
    previous(): Short2FloatMap$Entry;
    remove(): void;
    set(arg0: Short2FloatMap$Entry): void;
}