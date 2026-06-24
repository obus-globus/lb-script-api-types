import type { Int2BooleanLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2BooleanLinkedOpenHashMap$MapEntry.d.ts'
import type { Int2BooleanLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2BooleanLinkedOpenHashMap$MapIterator.d.ts'
import type { Int2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2BooleanMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Int2BooleanLinkedOpenHashMap$EntryIterator extends Int2BooleanLinkedOpenHashMap$MapIterator<(param0: Int2BooleanMap$Entry) => void> implements ObjectListIterator<Int2BooleanMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private entry: Int2BooleanLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Int2BooleanMap$Entry) => void, arg1: number): void;
    add(arg0: Int2BooleanMap$Entry): void;
    next(): Int2BooleanLinkedOpenHashMap$MapEntry;
    previous(): Int2BooleanLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Int2BooleanMap$Entry): void;
}