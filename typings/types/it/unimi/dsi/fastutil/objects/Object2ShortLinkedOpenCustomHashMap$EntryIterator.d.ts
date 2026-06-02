import type { Object2ShortLinkedOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortLinkedOpenCustomHashMap$MapEntry.d.ts'
import type { Object2ShortLinkedOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortLinkedOpenCustomHashMap$MapIterator.d.ts'
import type { Object2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ShortLinkedOpenCustomHashMap$EntryIterator extends Object2ShortLinkedOpenCustomHashMap$MapIterator<Object> implements ObjectListIterator<Object2ShortMap$Entry<K>> {
    constructor(null_: Object2ShortLinkedOpenCustomHashMap$EntryIterator)
    constructor(null_: Object2ShortLinkedOpenCustomHashMap$EntryIterator)
    // private entry: Object2ShortLinkedOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Object2ShortMap$Entry<K>) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Object2ShortLinkedOpenCustomHashMap$MapEntry;
    previous(): Object2ShortLinkedOpenCustomHashMap$MapEntry;
    remove(): void;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}