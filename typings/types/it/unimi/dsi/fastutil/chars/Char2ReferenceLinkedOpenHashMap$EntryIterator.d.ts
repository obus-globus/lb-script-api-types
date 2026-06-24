import type { Char2ReferenceLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceLinkedOpenHashMap$MapEntry.d.ts'
import type { Char2ReferenceLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceLinkedOpenHashMap$MapIterator.d.ts'
import type { Char2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ReferenceLinkedOpenHashMap$EntryIterator extends Char2ReferenceLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Char2ReferenceMap$Entry<V>> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: string)
    // private entry: Char2ReferenceLinkedOpenHashMap$MapEntry;
    acceptOnIndex<V extends unknown>(arg0: (param0: Char2ReferenceMap$Entry<V>) => void, arg1: number): void;
    add<V extends unknown>(arg0: Char2ReferenceMap$Entry<V>): void;
    next<V extends unknown>(): Char2ReferenceLinkedOpenHashMap$MapEntry;
    previous<V extends unknown>(): Char2ReferenceLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<V extends unknown>(arg0: Char2ReferenceMap$Entry<V>): void;
}