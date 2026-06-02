import type { Long2BooleanLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2BooleanLinkedOpenHashMap$MapEntry.d.ts'
import type { Long2BooleanLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2BooleanLinkedOpenHashMap$MapIterator.d.ts'
import type { Long2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2BooleanMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2BooleanLinkedOpenHashMap$FastEntryIterator extends Long2BooleanLinkedOpenHashMap$MapIterator<(param0: Long2BooleanMap$Entry) => void> implements ObjectListIterator<Long2BooleanMap$Entry> {
    constructor(null_: Long2BooleanLinkedOpenHashMap$FastEntryIterator)
    constructor(null_: Long2BooleanLinkedOpenHashMap$FastEntryIterator, arg1: number)
    // private entry: Long2BooleanLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Long2BooleanMap$Entry) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Long2BooleanLinkedOpenHashMap$MapEntry;
    previous(): Long2BooleanLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}