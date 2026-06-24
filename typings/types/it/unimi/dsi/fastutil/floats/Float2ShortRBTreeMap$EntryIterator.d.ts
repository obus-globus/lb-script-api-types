import type { Float2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ShortMap$Entry.d.ts'
import type { Float2ShortRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ShortRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Float2ShortRBTreeMap$EntryIterator extends Float2ShortRBTreeMap$TreeIterator implements ObjectListIterator<Float2ShortMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    add(arg0: Float2ShortMap$Entry): void;
    next(): Float2ShortMap$Entry;
    previous(): Float2ShortMap$Entry;
    remove(): void;
    set(arg0: Float2ShortMap$Entry): void;
}