import type { Long2CharLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharLinkedOpenHashMap$MapEntry.d.ts'
import type { Long2CharLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharLinkedOpenHashMap$MapIterator.d.ts'
import type { Long2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2CharLinkedOpenHashMap$FastEntryIterator extends Long2CharLinkedOpenHashMap$MapIterator<(param0: Long2CharMap$Entry) => void> implements ObjectListIterator<Long2CharMap$Entry> {
    constructor(null_: Long2CharLinkedOpenHashMap$FastEntryIterator)
    constructor(null_: Long2CharLinkedOpenHashMap$FastEntryIterator, arg1: number)
    // private entry: Long2CharLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Long2CharMap$Entry) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Long2CharLinkedOpenHashMap$MapEntry;
    previous(): Long2CharLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}