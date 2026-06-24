import type { Float2LongAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2LongAVLTreeMap$TreeIterator.d.ts'
import type { Float2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2LongMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Float2LongAVLTreeMap$EntryIterator extends Float2LongAVLTreeMap$TreeIterator implements ObjectListIterator<Float2LongMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    add(arg0: Float2LongMap$Entry): void;
    next(): Float2LongMap$Entry;
    previous(): Float2LongMap$Entry;
    remove(): void;
    set(arg0: Float2LongMap$Entry): void;
}