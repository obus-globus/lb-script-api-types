import type { Float2FloatAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2FloatAVLTreeMap$TreeIterator.d.ts'
import type { Float2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2FloatMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Float2FloatAVLTreeMap$EntryIterator extends Float2FloatAVLTreeMap$TreeIterator implements ObjectListIterator<Float2FloatMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    add(arg0: Float2FloatMap$Entry): void;
    next(): Float2FloatMap$Entry;
    previous(): Float2FloatMap$Entry;
    remove(): void;
    set(arg0: Float2FloatMap$Entry): void;
}