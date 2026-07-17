import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Long2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2LongMap$Entry.d.ts'
import type { Long2LongRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2LongRBTreeMap$TreeIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
export class Long2LongRBTreeMap$EntryIterator extends Long2LongRBTreeMap$TreeIterator implements ObjectListIterator<Long2LongMap$Entry> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    add(arg0: Long2LongMap$Entry): void;
    next(): Long2LongMap$Entry;
    previous(): Long2LongMap$Entry;
    remove(): void;
    set(arg0: Long2LongMap$Entry): void;
}