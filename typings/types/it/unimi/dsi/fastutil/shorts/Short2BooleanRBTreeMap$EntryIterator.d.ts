import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2BooleanMap$Entry.d.ts'
import type { Short2BooleanRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2BooleanRBTreeMap$TreeIterator.d.ts'
export class Short2BooleanRBTreeMap$EntryIterator extends Short2BooleanRBTreeMap$TreeIterator implements ObjectListIterator<Short2BooleanMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    add(arg0: Short2BooleanMap$Entry): void;
    next(): Short2BooleanMap$Entry;
    previous(): Short2BooleanMap$Entry;
    remove(): void;
    set(arg0: Short2BooleanMap$Entry): void;
}