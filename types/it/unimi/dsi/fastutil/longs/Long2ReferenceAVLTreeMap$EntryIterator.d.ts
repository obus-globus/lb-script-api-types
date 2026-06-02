import type { Long2ReferenceAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ReferenceAVLTreeMap$TreeIterator.d.ts'
import type { Long2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ReferenceMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ReferenceAVLTreeMap$EntryIterator extends Long2ReferenceAVLTreeMap$TreeIterator implements ObjectListIterator<Long2ReferenceMap$Entry<V>> {
    constructor(null_: Long2ReferenceAVLTreeMap$EntryIterator)
    constructor(null_: Long2ReferenceAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Long2ReferenceMap$Entry<V>): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Long2ReferenceMap$Entry<V>;
    previous(): Long2ReferenceMap$Entry<V>;
    remove(): void;
    set(arg0: Long2ReferenceMap$Entry<V>): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}