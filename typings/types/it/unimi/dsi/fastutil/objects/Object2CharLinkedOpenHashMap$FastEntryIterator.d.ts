import type { Object2CharLinkedOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharLinkedOpenHashMap$MapEntry.d.ts'
import type { Object2CharLinkedOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharLinkedOpenHashMap$MapIterator.d.ts'
import type { Object2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2CharLinkedOpenHashMap$FastEntryIterator extends Object2CharLinkedOpenHashMap$MapIterator<Object> implements ObjectListIterator<Object2CharMap$Entry<K>> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: K)
    // private entry: Object2CharLinkedOpenHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Object2CharMap$Entry<K>) => void, arg1: number): void;
    add<K extends unknown>(arg0: Object2CharMap$Entry<K>): void;
    next<K extends unknown>(): Object2CharLinkedOpenHashMap$MapEntry;
    previous<K extends unknown>(): Object2CharLinkedOpenHashMap$MapEntry;
    remove(): void;
    set<K extends unknown>(arg0: Object2CharMap$Entry<K>): void;
}