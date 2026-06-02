import type { Float2IntAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntAVLTreeMap$TreeIterator.d.ts'
import type { Float2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2IntAVLTreeMap$EntryIterator extends Float2IntAVLTreeMap$TreeIterator implements ObjectListIterator<Float2IntMap$Entry> {
    constructor(null_: Float2IntAVLTreeMap$EntryIterator)
    constructor(null_: Float2IntAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Float2IntMap$Entry): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Float2IntMap$Entry;
    previous(): Float2IntMap$Entry;
    remove(): void;
    set(arg0: Float2IntMap$Entry): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}