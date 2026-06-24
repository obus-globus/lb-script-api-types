import type { Char2BooleanLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanLinkedOpenHashMap$MapEntry.d.ts'
import type { Char2BooleanLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanLinkedOpenHashMap$MapIterator.d.ts'
import type { Char2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Char2BooleanLinkedOpenHashMap$EntryIterator extends Char2BooleanLinkedOpenHashMap$MapIterator<(param0: Char2BooleanMap$Entry) => void> implements ObjectListIterator<Char2BooleanMap$Entry> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: string)
    // private entry: Char2BooleanLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Char2BooleanMap$Entry) => void, arg1: number): void;
    add(arg0: Char2BooleanMap$Entry): void;
    next(): Char2BooleanLinkedOpenHashMap$MapEntry;
    previous(): Char2BooleanLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Char2BooleanMap$Entry): void;
}