import type { Float2ReferenceAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceAVLTreeMap$TreeIterator.d.ts'
import type { Float2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ReferenceAVLTreeMap$EntryIterator extends Float2ReferenceAVLTreeMap$TreeIterator implements ObjectListIterator<Float2ReferenceMap$Entry<V>> {
    constructor(null_: Float2ReferenceAVLTreeMap$EntryIterator)
    constructor(null_: Float2ReferenceAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Float2ReferenceMap$Entry<V>): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Float2ReferenceMap$Entry<V>;
    previous(): Float2ReferenceMap$Entry<V>;
    remove(): void;
    set(arg0: Float2ReferenceMap$Entry<V>): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}