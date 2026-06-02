import type { Char2LongLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2LongLinkedOpenHashMap$MapEntry.d.ts'
import type { Char2LongLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2LongLinkedOpenHashMap$MapIterator.d.ts'
import type { Char2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2LongMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2LongLinkedOpenHashMap$FastEntryIterator extends Char2LongLinkedOpenHashMap$MapIterator<(param0: Char2LongMap$Entry) => void> implements ObjectListIterator<Char2LongMap$Entry> {
    constructor(null_: Char2LongLinkedOpenHashMap$FastEntryIterator)
    constructor(null_: Char2LongLinkedOpenHashMap$FastEntryIterator, arg1: string)
    // private entry: Char2LongLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Char2LongMap$Entry) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Char2LongLinkedOpenHashMap$MapEntry;
    previous(): Char2LongLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}