import type { Object2CharLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharLinkedOpenHashMap$MapEntry.d.ts'
import type { Object2CharLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharLinkedOpenHashMap$MapIterator.d.ts'
import type { Object2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2CharLinkedOpenHashMap$EntryIterator extends Object2CharLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Object2CharMap$Entry<K>> {
    constructor(null_: Object2CharLinkedOpenHashMap$EntryIterator)
    constructor(null_: Object2CharLinkedOpenHashMap$EntryIterator)
    // private entry: Object2CharLinkedOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Object2CharMap$Entry<K>) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Object2CharLinkedOpenHashMap$MapEntry;
    previous(): Object2CharLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}