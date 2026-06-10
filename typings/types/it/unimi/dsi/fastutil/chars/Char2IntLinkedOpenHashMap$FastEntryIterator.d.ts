import type { Char2IntLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntLinkedOpenHashMap$MapEntry.d.ts'
import type { Char2IntLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntLinkedOpenHashMap$MapIterator.d.ts'
import type { Char2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Char2IntLinkedOpenHashMap$FastEntryIterator extends Char2IntLinkedOpenHashMap$MapIterator<(param0: Char2IntMap$Entry) => void> implements ObjectListIterator<Char2IntMap$Entry> {
    constructor(null_: Char2IntLinkedOpenHashMap$FastEntryIterator)
    constructor(null_: Char2IntLinkedOpenHashMap$FastEntryIterator, arg1: string)
    // private entry: Char2IntLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Char2IntMap$Entry) => void, arg1: number): void;
    add(arg0: Char2IntMap$Entry): void;
    next(): Char2IntLinkedOpenHashMap$MapEntry;
    previous(): Char2IntLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Char2IntMap$Entry): void;
}