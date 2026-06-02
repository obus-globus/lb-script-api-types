import type { Float2DoubleAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2DoubleAVLTreeMap$TreeIterator.d.ts'
import type { Float2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2DoubleMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2DoubleAVLTreeMap$EntryIterator extends Float2DoubleAVLTreeMap$TreeIterator implements ObjectListIterator<Float2DoubleMap$Entry> {
    constructor(null_: Float2DoubleAVLTreeMap$EntryIterator)
    constructor(null_: Float2DoubleAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Float2DoubleMap$Entry): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Float2DoubleMap$Entry;
    previous(): Float2DoubleMap$Entry;
    remove(): void;
    set(arg0: Float2DoubleMap$Entry): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}