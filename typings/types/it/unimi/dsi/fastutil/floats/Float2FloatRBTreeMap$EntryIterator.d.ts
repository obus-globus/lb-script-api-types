import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Float2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2FloatMap$Entry.d.ts'
import type { Float2FloatRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2FloatRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Float2FloatRBTreeMap$EntryIterator extends Float2FloatRBTreeMap$TreeIterator implements ObjectListIterator<Float2FloatMap$Entry> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    add(arg0: Float2FloatMap$Entry): void;
    next(): Float2FloatMap$Entry;
    previous(): Float2FloatMap$Entry;
    remove(): void;
    set(arg0: Float2FloatMap$Entry): void;
}