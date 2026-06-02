import type { Long2FloatAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2FloatAVLTreeMap$TreeIterator.d.ts'
import type { Long2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2FloatMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2FloatAVLTreeMap$EntryIterator extends Long2FloatAVLTreeMap$TreeIterator implements ObjectListIterator<Long2FloatMap$Entry> {
    constructor(null_: Long2FloatAVLTreeMap$EntryIterator)
    constructor(null_: Long2FloatAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Long2FloatMap$Entry): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Long2FloatMap$Entry;
    previous(): Long2FloatMap$Entry;
    remove(): void;
    set(arg0: Long2FloatMap$Entry): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}