import type { Byte2ObjectLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ObjectLinkedOpenHashMap$MapEntry.d.ts'
import type { Byte2ObjectLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ObjectLinkedOpenHashMap$MapIterator.d.ts'
import type { Byte2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ObjectMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ObjectLinkedOpenHashMap$EntryIterator extends Byte2ObjectLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Byte2ObjectMap$Entry<V>> {
    constructor(null_: Byte2ObjectLinkedOpenHashMap$EntryIterator)
    constructor(null_: Byte2ObjectLinkedOpenHashMap$EntryIterator, arg1: number)
    // private entry: Byte2ObjectLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Byte2ObjectMap$Entry<V>) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Byte2ObjectLinkedOpenHashMap$MapEntry;
    previous(): Byte2ObjectLinkedOpenHashMap$MapEntry;
    remove(): void;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}