import type { Object2LongLinkedOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongLinkedOpenCustomHashMap$MapEntry.d.ts'
import type { Object2LongLinkedOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongLinkedOpenCustomHashMap$MapIterator.d.ts'
import type { Object2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2LongLinkedOpenCustomHashMap$FastEntryIterator extends Object2LongLinkedOpenCustomHashMap$MapIterator<Object> implements ObjectListIterator<Object2LongMap$Entry<K>> {
    constructor(null_: Object2LongLinkedOpenCustomHashMap$FastEntryIterator)
    constructor(null_: Object2LongLinkedOpenCustomHashMap$FastEntryIterator)
    // private entry: Object2LongLinkedOpenCustomHashMap$MapEntry;
    acceptOnIndex<K extends Object | number | string | boolean>(arg0: (param0: Object2LongMap$Entry<K>) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: Object2LongMap$Entry<K>): void;
    next<K extends Object | number | string | boolean>(): Object2LongLinkedOpenCustomHashMap$MapEntry;
    previous<K extends Object | number | string | boolean>(): Object2LongLinkedOpenCustomHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: Object2LongMap$Entry<K>): void;
}