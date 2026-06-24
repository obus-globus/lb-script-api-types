import type { Char2ObjectLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectLinkedOpenHashMap$MapEntry.d.ts'
import type { Char2ObjectLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectLinkedOpenHashMap$MapIterator.d.ts'
import type { Char2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ObjectLinkedOpenHashMap$EntryIterator extends Char2ObjectLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Char2ObjectMap$Entry<V>> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: string)
    // private entry: Char2ObjectLinkedOpenHashMap$MapEntry;
    acceptOnIndex<V extends unknown>(arg0: (param0: Char2ObjectMap$Entry<V>) => void, arg1: number): void;
    add<V extends unknown>(arg0: Char2ObjectMap$Entry<V>): void;
    next<V extends unknown>(): Char2ObjectLinkedOpenHashMap$MapEntry;
    previous<V extends unknown>(): Char2ObjectLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<V extends unknown>(arg0: Char2ObjectMap$Entry<V>): void;
}