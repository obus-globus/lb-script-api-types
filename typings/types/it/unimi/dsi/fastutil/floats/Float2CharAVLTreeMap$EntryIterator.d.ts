import type { Float2CharAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharAVLTreeMap$TreeIterator.d.ts'
import type { Float2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Float2CharAVLTreeMap$EntryIterator extends Float2CharAVLTreeMap$TreeIterator implements ObjectListIterator<Float2CharMap$Entry> {
    constructor(null_: Float2CharAVLTreeMap$EntryIterator)
    constructor(null_: Float2CharAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Float2CharMap$Entry): void;
    next(): Float2CharMap$Entry;
    previous(): Float2CharMap$Entry;
    remove(): void;
    set(arg0: Float2CharMap$Entry): void;
}