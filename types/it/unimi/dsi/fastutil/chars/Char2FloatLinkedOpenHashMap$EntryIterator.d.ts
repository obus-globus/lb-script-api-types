import type { Char2FloatLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatLinkedOpenHashMap$MapEntry.d.ts'
import type { Char2FloatLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatLinkedOpenHashMap$MapIterator.d.ts'
import type { Char2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2FloatLinkedOpenHashMap$EntryIterator extends Char2FloatLinkedOpenHashMap$MapIterator<(param0: Char2FloatMap$Entry) => void> implements ObjectListIterator<Char2FloatMap$Entry> {
    constructor(null_: Char2FloatLinkedOpenHashMap$EntryIterator)
    constructor(null_: Char2FloatLinkedOpenHashMap$EntryIterator, arg1: string)
    // private entry: Char2FloatLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Char2FloatMap$Entry) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Char2FloatLinkedOpenHashMap$MapEntry;
    previous(): Char2FloatLinkedOpenHashMap$MapEntry;
    remove(): void;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}