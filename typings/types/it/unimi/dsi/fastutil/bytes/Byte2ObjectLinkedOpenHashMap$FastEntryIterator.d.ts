import type { Byte2ObjectLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ObjectLinkedOpenHashMap$MapEntry.d.ts'
import type { Byte2ObjectLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ObjectLinkedOpenHashMap$MapIterator.d.ts'
import type { Byte2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ObjectMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ObjectLinkedOpenHashMap$FastEntryIterator extends Byte2ObjectLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Byte2ObjectMap$Entry<V>> {
    constructor(null_: Byte2ObjectLinkedOpenHashMap$FastEntryIterator)
    constructor(null_: Byte2ObjectLinkedOpenHashMap$FastEntryIterator, arg1: number)
    // private entry: Byte2ObjectLinkedOpenHashMap$MapEntry;
    acceptOnIndex<V extends Object | number | string | boolean>(arg0: (param0: Byte2ObjectMap$Entry<V>) => void, arg1: number): void;
    add<V extends Object | number | string | boolean>(arg0: Byte2ObjectMap$Entry<V>): void;
    next<V extends Object | number | string | boolean>(): Byte2ObjectLinkedOpenHashMap$MapEntry;
    previous<V extends Object | number | string | boolean>(): Byte2ObjectLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<V extends Object | number | string | boolean>(arg0: Byte2ObjectMap$Entry<V>): void;
}