import type { Long2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ReferenceMap$Entry.d.ts'
import type { Long2ReferenceRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ReferenceRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ReferenceRBTreeMap$EntryIterator extends Long2ReferenceRBTreeMap$TreeIterator implements ObjectListIterator<Long2ReferenceMap$Entry<V>> {
    constructor(null_: Long2ReferenceRBTreeMap$EntryIterator)
    constructor(null_: Long2ReferenceRBTreeMap$EntryIterator, arg1: number)
    add<V extends Object | number | string | boolean>(arg0: Long2ReferenceMap$Entry<V>): void;
    next<V extends Object | number | string | boolean>(): Long2ReferenceMap$Entry<V>;
    previous<V extends Object | number | string | boolean>(): Long2ReferenceMap$Entry<V>;
    remove(): void;
    set<V extends Object | number | string | boolean>(arg0: Long2ReferenceMap$Entry<V>): void;
}