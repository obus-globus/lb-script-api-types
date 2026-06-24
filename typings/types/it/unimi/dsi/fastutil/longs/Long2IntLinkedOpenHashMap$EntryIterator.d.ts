import type { Long2IntLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2IntLinkedOpenHashMap$MapEntry.d.ts'
import type { Long2IntLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2IntLinkedOpenHashMap$MapIterator.d.ts'
import type { Long2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2IntMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Long2IntLinkedOpenHashMap$EntryIterator extends Long2IntLinkedOpenHashMap$MapIterator<(param0: Long2IntMap$Entry) => void> implements ObjectListIterator<Long2IntMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private entry: Long2IntLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Long2IntMap$Entry) => void, arg1: number): void;
    add(arg0: Long2IntMap$Entry): void;
    next(): Long2IntLinkedOpenHashMap$MapEntry;
    previous(): Long2IntLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Long2IntMap$Entry): void;
}