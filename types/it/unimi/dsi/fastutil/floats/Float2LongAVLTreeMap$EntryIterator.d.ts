import type { Float2LongAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2LongAVLTreeMap$TreeIterator.d.ts'
import type { Float2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2LongMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2LongAVLTreeMap$EntryIterator extends Float2LongAVLTreeMap$TreeIterator implements ObjectListIterator<Float2LongMap$Entry> {
    constructor(null_: Float2LongAVLTreeMap$EntryIterator)
    constructor(null_: Float2LongAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Float2LongMap$Entry): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Float2LongMap$Entry;
    previous(): Float2LongMap$Entry;
    remove(): void;
    set(arg0: Float2LongMap$Entry): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}