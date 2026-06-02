import type { Object2ObjectLinkedOpenHashMap$MapEntry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/Object2ObjectLinkedOpenHashMap$MapEntry.d.ts'
import type { Object2ObjectLinkedOpenHashMap$MapIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/Object2ObjectLinkedOpenHashMap$MapIterator.d.ts'
import type { Object2ObjectMap$Entry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/Object2ObjectMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Object2ObjectLinkedOpenHashMap$EntryIterator extends Object2ObjectLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Object2ObjectMap$Entry<K, V>> {
    constructor(null_: Object2ObjectLinkedOpenHashMap$EntryIterator)
    constructor(null_: Object2ObjectLinkedOpenHashMap$EntryIterator)
    // private entry: Object2ObjectLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Object2ObjectMap$Entry<K, V>) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Object2ObjectLinkedOpenHashMap$MapEntry;
    previous(): Object2ObjectLinkedOpenHashMap$MapEntry;
    remove(): void;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}