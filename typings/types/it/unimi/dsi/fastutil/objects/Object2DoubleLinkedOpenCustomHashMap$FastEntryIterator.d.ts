import type { Object2DoubleLinkedOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleLinkedOpenCustomHashMap$MapEntry.d.ts'
import type { Object2DoubleLinkedOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleLinkedOpenCustomHashMap$MapIterator.d.ts'
import type { Object2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2DoubleLinkedOpenCustomHashMap$FastEntryIterator extends Object2DoubleLinkedOpenCustomHashMap$MapIterator<Object> implements ObjectListIterator<Object2DoubleMap$Entry<K>> {
    constructor(null_: Object2DoubleLinkedOpenCustomHashMap$FastEntryIterator)
    constructor(null_: Object2DoubleLinkedOpenCustomHashMap$FastEntryIterator)
    // private entry: Object2DoubleLinkedOpenCustomHashMap$MapEntry;
    acceptOnIndex<K extends Object | number | string | boolean>(arg0: (param0: Object2DoubleMap$Entry<K>) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: Object2DoubleMap$Entry<K>): void;
    next<K extends Object | number | string | boolean>(): Object2DoubleLinkedOpenCustomHashMap$MapEntry;
    previous<K extends Object | number | string | boolean>(): Object2DoubleLinkedOpenCustomHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: Object2DoubleMap$Entry<K>): void;
}