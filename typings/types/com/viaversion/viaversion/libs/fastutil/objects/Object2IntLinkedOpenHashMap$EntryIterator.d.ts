import type { Object2IntLinkedOpenHashMap$MapEntry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/Object2IntLinkedOpenHashMap$MapEntry.d.ts'
import type { Object2IntLinkedOpenHashMap$MapIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/Object2IntLinkedOpenHashMap$MapIterator.d.ts'
import type { Object2IntMap$Entry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/Object2IntMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Object2IntLinkedOpenHashMap$EntryIterator extends Object2IntLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Object2IntMap$Entry<K>> {
    constructor(null_: Object2IntLinkedOpenHashMap$EntryIterator)
    constructor(null_: Object2IntLinkedOpenHashMap$EntryIterator)
    // private entry: Object2IntLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Object2IntMap$Entry<K>) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Object2IntLinkedOpenHashMap$MapEntry;
    previous(): Object2IntLinkedOpenHashMap$MapEntry;
    remove(): void;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}