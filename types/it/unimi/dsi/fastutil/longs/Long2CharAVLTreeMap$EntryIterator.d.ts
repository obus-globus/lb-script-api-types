import type { Long2CharAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharAVLTreeMap$TreeIterator.d.ts'
import type { Long2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2CharAVLTreeMap$EntryIterator extends Long2CharAVLTreeMap$TreeIterator implements ObjectListIterator<Long2CharMap$Entry> {
    constructor(null_: Long2CharAVLTreeMap$EntryIterator)
    constructor(null_: Long2CharAVLTreeMap$EntryIterator, arg1: number)
    add(arg0: Long2CharMap$Entry): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Long2CharMap$Entry;
    previous(): Long2CharMap$Entry;
    remove(): void;
    set(arg0: Long2CharMap$Entry): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}