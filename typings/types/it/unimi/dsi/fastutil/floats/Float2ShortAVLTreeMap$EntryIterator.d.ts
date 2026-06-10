import type { Float2ShortAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ShortAVLTreeMap$TreeIterator.d.ts'
import type { Float2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ShortMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Float2ShortAVLTreeMap$EntryIterator extends Float2ShortAVLTreeMap$TreeIterator implements ObjectListIterator<Float2ShortMap$Entry> {
    constructor(null_: Float2ShortAVLTreeMap$EntryIterator)
    constructor(null_: Float2ShortAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Float2ShortMap$Entry): void;
    next(): Float2ShortMap$Entry;
    previous(): Float2ShortMap$Entry;
    remove(): void;
    set(arg0: Float2ShortMap$Entry): void;
}