import type { Char2ByteLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteLinkedOpenHashMap$MapEntry.d.ts'
import type { Char2ByteLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteLinkedOpenHashMap$MapIterator.d.ts'
import type { Char2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ByteLinkedOpenHashMap$EntryIterator extends Char2ByteLinkedOpenHashMap$MapIterator<(param0: Char2ByteMap$Entry) => void> implements ObjectListIterator<Char2ByteMap$Entry> {
    constructor(null_: Char2ByteLinkedOpenHashMap$EntryIterator)
    constructor(null_: Char2ByteLinkedOpenHashMap$EntryIterator, arg1: string)
    // private entry: Char2ByteLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Char2ByteMap$Entry) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Char2ByteLinkedOpenHashMap$MapEntry;
    previous(): Char2ByteLinkedOpenHashMap$MapEntry;
    remove(): void;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}