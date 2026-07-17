import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Long2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharMap$Entry.d.ts'
import type { Long2CharRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Long2CharRBTreeMap$EntryIterator extends Long2CharRBTreeMap$TreeIterator implements ObjectListIterator<Long2CharMap$Entry> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    add(arg0: Long2CharMap$Entry): void;
    next(): Long2CharMap$Entry;
    previous(): Long2CharMap$Entry;
    remove(): void;
    set(arg0: Long2CharMap$Entry): void;
}