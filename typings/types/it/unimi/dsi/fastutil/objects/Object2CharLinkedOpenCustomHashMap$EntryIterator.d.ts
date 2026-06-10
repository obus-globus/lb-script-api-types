import type { Object2CharLinkedOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharLinkedOpenCustomHashMap$MapEntry.d.ts'
import type { Object2CharLinkedOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharLinkedOpenCustomHashMap$MapIterator.d.ts'
import type { Object2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2CharLinkedOpenCustomHashMap$EntryIterator extends Object2CharLinkedOpenCustomHashMap$MapIterator<Object> implements ObjectListIterator<Object2CharMap$Entry<K>> {
    constructor(null_: Object2CharLinkedOpenCustomHashMap$EntryIterator)
    constructor(null_: Object2CharLinkedOpenCustomHashMap$EntryIterator)
    // private entry: Object2CharLinkedOpenCustomHashMap$MapEntry;
    acceptOnIndex<K extends Object | number | string | boolean>(arg0: (param0: Object2CharMap$Entry<K>) => void, arg1: number): void;
    add<K extends Object | number | string | boolean>(arg0: Object2CharMap$Entry<K>): void;
    next<K extends Object | number | string | boolean>(): Object2CharLinkedOpenCustomHashMap$MapEntry;
    previous<K extends Object | number | string | boolean>(): Object2CharLinkedOpenCustomHashMap$MapEntry;
    remove(): void;
    set<K extends Object | number | string | boolean>(arg0: Object2CharMap$Entry<K>): void;
}