import type { Char2ShortLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ShortLinkedOpenHashMap$MapEntry.d.ts'
import type { Char2ShortLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ShortLinkedOpenHashMap$MapIterator.d.ts'
import type { Char2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ShortMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Char2ShortLinkedOpenHashMap$FastEntryIterator extends Char2ShortLinkedOpenHashMap$MapIterator<(param0: Char2ShortMap$Entry) => void> implements ObjectListIterator<Char2ShortMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: string)
    // private entry: Char2ShortLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Char2ShortMap$Entry) => void, arg1: number): void;
    add(arg0: Char2ShortMap$Entry): void;
    next(): Char2ShortLinkedOpenHashMap$MapEntry;
    previous(): Char2ShortLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Char2ShortMap$Entry): void;
}