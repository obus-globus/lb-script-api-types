import type { Float2BooleanAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2BooleanAVLTreeMap$TreeIterator.d.ts'
import type { Float2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2BooleanMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2BooleanAVLTreeMap$EntryIterator extends Float2BooleanAVLTreeMap$TreeIterator implements ObjectListIterator<Float2BooleanMap$Entry> {
    constructor(null_: Float2BooleanAVLTreeMap$EntryIterator)
    constructor(null_: Float2BooleanAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Float2BooleanMap$Entry): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Float2BooleanMap$Entry;
    previous(): Float2BooleanMap$Entry;
    remove(): void;
    set(arg0: Float2BooleanMap$Entry): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}