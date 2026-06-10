import type { Object2ByteLinkedOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteLinkedOpenCustomHashMap$MapEntry.d.ts'
import type { Object2ByteLinkedOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteLinkedOpenCustomHashMap$MapIterator.d.ts'
import type { Object2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ByteLinkedOpenCustomHashMap$FastEntryIterator extends Object2ByteLinkedOpenCustomHashMap$MapIterator<Object> implements ObjectListIterator<Object2ByteMap$Entry<K>> {
    constructor(null_: Object2ByteLinkedOpenCustomHashMap$FastEntryIterator)
    constructor(null_: Object2ByteLinkedOpenCustomHashMap$FastEntryIterator)
    // private entry: Object2ByteLinkedOpenCustomHashMap$MapEntry;
    acceptOnIndex<K extends Object | number | string | boolean>(arg0: (param0: Object2ByteMap$Entry<K>) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: Object2ByteMap$Entry<K>): void;
    next<K extends Object | number | string | boolean>(): Object2ByteLinkedOpenCustomHashMap$MapEntry;
    previous<K extends Object | number | string | boolean>(): Object2ByteLinkedOpenCustomHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: Object2ByteMap$Entry<K>): void;
}