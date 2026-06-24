import type { Float2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2DoubleMap$Entry.d.ts'
import type { Float2DoubleRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2DoubleRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Float2DoubleRBTreeMap$EntryIterator extends Float2DoubleRBTreeMap$TreeIterator implements ObjectListIterator<Float2DoubleMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    add(arg0: Float2DoubleMap$Entry): void;
    next(): Float2DoubleMap$Entry;
    previous(): Float2DoubleMap$Entry;
    remove(): void;
    set(arg0: Float2DoubleMap$Entry): void;
}