import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Float2IntAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntAVLTreeMap$TreeIterator.d.ts'
import type { Float2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Float2IntAVLTreeMap$EntryIterator extends Float2IntAVLTreeMap$TreeIterator implements ObjectListIterator<Float2IntMap$Entry> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    add(arg0: Float2IntMap$Entry): void;
    next(): Float2IntMap$Entry;
    previous(): Float2IntMap$Entry;
    remove(): void;
    set(arg0: Float2IntMap$Entry): void;
}