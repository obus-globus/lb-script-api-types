import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object2IntLinkedOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2IntLinkedOpenCustomHashMap$MapEntry.d.ts'
import type { Object2IntLinkedOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2IntLinkedOpenCustomHashMap$MapIterator.d.ts'
import type { Object2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2IntMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2IntLinkedOpenCustomHashMap$FastEntryIterator extends Object2IntLinkedOpenCustomHashMap$MapIterator<Object> implements ObjectListIterator<Object2IntMap$Entry<K>> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: Object)
    // private entry: Object2IntLinkedOpenCustomHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Object2IntMap$Entry<K>) => void, arg1: number): void;
    add<K extends unknown>(arg0: Object2IntMap$Entry<K>): void;
    next<K extends unknown>(): Object2IntLinkedOpenCustomHashMap$MapEntry;
    previous<K extends unknown>(): Object2IntLinkedOpenCustomHashMap$MapEntry;
    remove(): void;
    set<K extends unknown>(arg0: Object2IntMap$Entry<K>): void;
}