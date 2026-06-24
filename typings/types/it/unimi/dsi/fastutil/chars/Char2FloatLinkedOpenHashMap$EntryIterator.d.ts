import type { Char2FloatLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatLinkedOpenHashMap$MapEntry.d.ts'
import type { Char2FloatLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatLinkedOpenHashMap$MapIterator.d.ts'
import type { Char2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Char2FloatLinkedOpenHashMap$EntryIterator extends Char2FloatLinkedOpenHashMap$MapIterator<(param0: Char2FloatMap$Entry) => void> implements ObjectListIterator<Char2FloatMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: string)
    // private entry: Char2FloatLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Char2FloatMap$Entry) => void, arg1: number): void;
    add(arg0: Char2FloatMap$Entry): void;
    next(): Char2FloatLinkedOpenHashMap$MapEntry;
    previous(): Char2FloatLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Char2FloatMap$Entry): void;
}