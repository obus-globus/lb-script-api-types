import type { Int2BooleanLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2BooleanLinkedOpenHashMap$MapEntry.d.ts'
import type { Int2BooleanLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2BooleanLinkedOpenHashMap$MapIterator.d.ts'
import type { Int2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2BooleanMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2BooleanLinkedOpenHashMap$EntryIterator extends Int2BooleanLinkedOpenHashMap$MapIterator<(param0: Int2BooleanMap$Entry) => void> implements ObjectListIterator<Int2BooleanMap$Entry> {
    constructor(null_: Int2BooleanLinkedOpenHashMap$EntryIterator)
    constructor(null_: Int2BooleanLinkedOpenHashMap$EntryIterator, arg1: number)
    // private entry: Int2BooleanLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Int2BooleanMap$Entry) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Int2BooleanLinkedOpenHashMap$MapEntry;
    previous(): Int2BooleanLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}