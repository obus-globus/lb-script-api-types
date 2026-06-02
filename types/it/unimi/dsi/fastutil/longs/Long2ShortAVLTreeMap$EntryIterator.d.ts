import type { Long2ShortAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ShortAVLTreeMap$TreeIterator.d.ts'
import type { Long2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ShortMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ShortAVLTreeMap$EntryIterator extends Long2ShortAVLTreeMap$TreeIterator implements ObjectListIterator<Long2ShortMap$Entry> {
    constructor(null_: Long2ShortAVLTreeMap$EntryIterator)
    constructor(null_: Long2ShortAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Long2ShortMap$Entry): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Long2ShortMap$Entry;
    previous(): Long2ShortMap$Entry;
    remove(): void;
    set(arg0: Long2ShortMap$Entry): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}