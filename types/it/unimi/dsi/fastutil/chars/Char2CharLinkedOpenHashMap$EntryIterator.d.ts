import type { Char2CharLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharLinkedOpenHashMap$MapEntry.d.ts'
import type { Char2CharLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharLinkedOpenHashMap$MapIterator.d.ts'
import type { Char2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2CharLinkedOpenHashMap$EntryIterator extends Char2CharLinkedOpenHashMap$MapIterator<(param0: Char2CharMap$Entry) => void> implements ObjectListIterator<Char2CharMap$Entry> {
    constructor(null_: Char2CharLinkedOpenHashMap$EntryIterator)
    constructor(null_: Char2CharLinkedOpenHashMap$EntryIterator, arg1: string)
    // private entry: Char2CharLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Char2CharMap$Entry) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Char2CharLinkedOpenHashMap$MapEntry;
    previous(): Char2CharLinkedOpenHashMap$MapEntry;
    remove(): void;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}