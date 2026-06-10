import type { Long2CharLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharLinkedOpenHashMap$MapEntry.d.ts'
import type { Long2CharLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharLinkedOpenHashMap$MapIterator.d.ts'
import type { Long2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Long2CharLinkedOpenHashMap$EntryIterator extends Long2CharLinkedOpenHashMap$MapIterator<(param0: Long2CharMap$Entry) => void> implements ObjectListIterator<Long2CharMap$Entry> {
    constructor(null_: Long2CharLinkedOpenHashMap$EntryIterator)
    constructor(null_: Long2CharLinkedOpenHashMap$EntryIterator, arg1: number)
    // private entry: Long2CharLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Long2CharMap$Entry) => void, arg1: number): void;
    add(arg0: Long2CharMap$Entry): void;
    next(): Long2CharLinkedOpenHashMap$MapEntry;
    previous(): Long2CharLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Long2CharMap$Entry): void;
}