import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2BooleanAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2BooleanAVLTreeMap$TreeIterator.d.ts'
import type { Short2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2BooleanMap$Entry.d.ts'
export class Short2BooleanAVLTreeMap$EntryIterator extends Short2BooleanAVLTreeMap$TreeIterator implements ObjectListIterator<Short2BooleanMap$Entry> {
    constructor(null_: Short2BooleanAVLTreeMap$EntryIterator)
    constructor(null_: Short2BooleanAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Short2BooleanMap$Entry): void;
    next(): Short2BooleanMap$Entry;
    previous(): Short2BooleanMap$Entry;
    remove(): void;
    set(arg0: Short2BooleanMap$Entry): void;
}