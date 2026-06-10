import type { Object2ShortLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortLinkedOpenHashMap$MapEntry.d.ts'
import type { Object2ShortLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortLinkedOpenHashMap$MapIterator.d.ts'
import type { Object2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ShortLinkedOpenHashMap$EntryIterator extends Object2ShortLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Object2ShortMap$Entry<K>> {
    constructor(null_: Object2ShortLinkedOpenHashMap$EntryIterator)
    constructor(null_: Object2ShortLinkedOpenHashMap$EntryIterator)
    // private entry: Object2ShortLinkedOpenHashMap$MapEntry;
    acceptOnIndex<K extends Object | number | string | boolean>(arg0: (param0: Object2ShortMap$Entry<K>) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: Object2ShortMap$Entry<K>): void;
    next<K extends Object | number | string | boolean>(): Object2ShortLinkedOpenHashMap$MapEntry;
    previous<K extends Object | number | string | boolean>(): Object2ShortLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: Object2ShortMap$Entry<K>): void;
}