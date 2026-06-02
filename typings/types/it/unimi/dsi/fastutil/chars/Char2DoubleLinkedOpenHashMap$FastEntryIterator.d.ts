import type { Char2DoubleLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleLinkedOpenHashMap$MapEntry.d.ts'
import type { Char2DoubleLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleLinkedOpenHashMap$MapIterator.d.ts'
import type { Char2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2DoubleLinkedOpenHashMap$FastEntryIterator extends Char2DoubleLinkedOpenHashMap$MapIterator<(param0: Char2DoubleMap$Entry) => void> implements ObjectListIterator<Char2DoubleMap$Entry> {
    constructor(null_: Char2DoubleLinkedOpenHashMap$FastEntryIterator)
    constructor(null_: Char2DoubleLinkedOpenHashMap$FastEntryIterator, arg1: string)
    // private entry: Char2DoubleLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Char2DoubleMap$Entry) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Char2DoubleLinkedOpenHashMap$MapEntry;
    previous(): Char2DoubleLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}