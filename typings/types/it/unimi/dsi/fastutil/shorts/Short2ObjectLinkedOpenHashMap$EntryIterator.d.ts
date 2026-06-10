import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Short2ObjectLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectLinkedOpenHashMap$MapEntry.d.ts'
import type { Short2ObjectLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectLinkedOpenHashMap$MapIterator.d.ts'
import type { Short2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ObjectLinkedOpenHashMap$EntryIterator extends Short2ObjectLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Short2ObjectMap$Entry<V>> {
    constructor(null_: Short2ObjectLinkedOpenHashMap$EntryIterator)
    constructor(null_: Short2ObjectLinkedOpenHashMap$EntryIterator, arg1: number)
    // private entry: Short2ObjectLinkedOpenHashMap$MapEntry;
    acceptOnIndex<V extends Object | number | string | boolean>(arg0: (param0: Short2ObjectMap$Entry<V>) => void, arg1: number): void;
    add<V extends Object | number | string | boolean>(arg0: Short2ObjectMap$Entry<V>): void;
    next<V extends Object | number | string | boolean>(): Short2ObjectLinkedOpenHashMap$MapEntry;
    previous<V extends Object | number | string | boolean>(): Short2ObjectLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<V extends Object | number | string | boolean>(arg0: Short2ObjectMap$Entry<V>): void;
}