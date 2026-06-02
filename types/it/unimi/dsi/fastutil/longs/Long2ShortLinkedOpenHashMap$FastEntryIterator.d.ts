import type { Long2ShortLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ShortLinkedOpenHashMap$MapEntry.d.ts'
import type { Long2ShortLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ShortLinkedOpenHashMap$MapIterator.d.ts'
import type { Long2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ShortMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ShortLinkedOpenHashMap$FastEntryIterator extends Long2ShortLinkedOpenHashMap$MapIterator<(param0: Long2ShortMap$Entry) => void> implements ObjectListIterator<Long2ShortMap$Entry> {
    constructor(null_: Long2ShortLinkedOpenHashMap$FastEntryIterator)
    constructor(null_: Long2ShortLinkedOpenHashMap$FastEntryIterator, arg1: number)
    // private entry: Long2ShortLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Long2ShortMap$Entry) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Long2ShortLinkedOpenHashMap$MapEntry;
    previous(): Long2ShortLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}