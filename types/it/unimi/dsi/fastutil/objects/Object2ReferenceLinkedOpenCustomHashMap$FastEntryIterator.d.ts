import type { Object2ReferenceLinkedOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceLinkedOpenCustomHashMap$MapEntry.d.ts'
import type { Object2ReferenceLinkedOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceLinkedOpenCustomHashMap$MapIterator.d.ts'
import type { Object2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ReferenceLinkedOpenCustomHashMap$FastEntryIterator extends Object2ReferenceLinkedOpenCustomHashMap$MapIterator<Object> implements ObjectListIterator<Object2ReferenceMap$Entry<K, V>> {
    constructor(null_: Object2ReferenceLinkedOpenCustomHashMap$FastEntryIterator)
    constructor(null_: Object2ReferenceLinkedOpenCustomHashMap$FastEntryIterator)
    // private entry: Object2ReferenceLinkedOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Object2ReferenceMap$Entry<K, V>) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: K): void;
    next(): Object2ReferenceLinkedOpenCustomHashMap$MapEntry;
    previous(): Object2ReferenceLinkedOpenCustomHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: K): void;
}