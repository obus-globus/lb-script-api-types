import type { Float2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ShortMap$Entry.d.ts'
import type { Float2ShortRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ShortRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ShortRBTreeMap$EntryIterator extends Float2ShortRBTreeMap$TreeIterator implements ObjectListIterator<Float2ShortMap$Entry> {
    constructor(null_: Float2ShortRBTreeMap$EntryIterator)
    constructor(null_: Float2ShortRBTreeMap$EntryIterator, arg1: number)
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Float2ShortMap$Entry;
    previous(): Float2ShortMap$Entry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}