import type { Int2CharLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharLinkedOpenHashMap$MapEntry.d.ts'
import type { Int2CharLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharLinkedOpenHashMap$MapIterator.d.ts'
import type { Int2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Int2CharLinkedOpenHashMap$FastEntryIterator extends Int2CharLinkedOpenHashMap$MapIterator<(param0: Int2CharMap$Entry) => void> implements ObjectListIterator<Int2CharMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private entry: Int2CharLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Int2CharMap$Entry) => void, arg1: number): void;
    add(arg0: Int2CharMap$Entry): void;
    next(): Int2CharLinkedOpenHashMap$MapEntry;
    previous(): Int2CharLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Int2CharMap$Entry): void;
}