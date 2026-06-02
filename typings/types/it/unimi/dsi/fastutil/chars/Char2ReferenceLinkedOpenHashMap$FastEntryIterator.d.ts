import type { Char2ReferenceLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceLinkedOpenHashMap$MapEntry.d.ts'
import type { Char2ReferenceLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceLinkedOpenHashMap$MapIterator.d.ts'
import type { Char2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ReferenceLinkedOpenHashMap$FastEntryIterator extends Char2ReferenceLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Char2ReferenceMap$Entry<V>> {
    constructor(null_: Char2ReferenceLinkedOpenHashMap$FastEntryIterator)
    constructor(null_: Char2ReferenceLinkedOpenHashMap$FastEntryIterator, arg1: string)
    // private entry: Char2ReferenceLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Char2ReferenceMap$Entry<V>) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Char2ReferenceLinkedOpenHashMap$MapEntry;
    previous(): Char2ReferenceLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}