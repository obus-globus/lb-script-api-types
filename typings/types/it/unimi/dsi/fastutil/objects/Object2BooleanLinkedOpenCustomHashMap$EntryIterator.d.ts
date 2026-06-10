import type { Object2BooleanLinkedOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanLinkedOpenCustomHashMap$MapEntry.d.ts'
import type { Object2BooleanLinkedOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanLinkedOpenCustomHashMap$MapIterator.d.ts'
import type { Object2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2BooleanLinkedOpenCustomHashMap$EntryIterator extends Object2BooleanLinkedOpenCustomHashMap$MapIterator<Object> implements ObjectListIterator<Object2BooleanMap$Entry<K>> {
    constructor(null_: Object2BooleanLinkedOpenCustomHashMap$EntryIterator)
    constructor(null_: Object2BooleanLinkedOpenCustomHashMap$EntryIterator)
    // private entry: Object2BooleanLinkedOpenCustomHashMap$MapEntry;
    acceptOnIndex<K extends Object | number | string | boolean>(arg0: (param0: Object2BooleanMap$Entry<K>) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: Object2BooleanMap$Entry<K>): void;
    next<K extends Object | number | string | boolean>(): Object2BooleanLinkedOpenCustomHashMap$MapEntry;
    previous<K extends Object | number | string | boolean>(): Object2BooleanLinkedOpenCustomHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: Object2BooleanMap$Entry<K>): void;
}