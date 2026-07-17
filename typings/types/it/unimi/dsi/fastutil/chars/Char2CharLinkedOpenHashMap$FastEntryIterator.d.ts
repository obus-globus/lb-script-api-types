import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Char2CharLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharLinkedOpenHashMap$MapEntry.d.ts'
import type { Char2CharLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharLinkedOpenHashMap$MapIterator.d.ts'
import type { Char2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Char2CharLinkedOpenHashMap$FastEntryIterator extends Char2CharLinkedOpenHashMap$MapIterator<(param0: Char2CharMap$Entry) => void> implements ObjectListIterator<Char2CharMap$Entry> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: string)
    // private entry: Char2CharLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Char2CharMap$Entry) => void, arg1: number): void;
    add(arg0: Char2CharMap$Entry): void;
    next(): Char2CharLinkedOpenHashMap$MapEntry;
    previous(): Char2CharLinkedOpenHashMap$MapEntry;
    remove(): void;
    set(arg0: Char2CharMap$Entry): void;
}