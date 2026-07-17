import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object2BooleanLinkedOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanLinkedOpenCustomHashMap$MapEntry.d.ts'
import type { Object2BooleanLinkedOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanLinkedOpenCustomHashMap$MapIterator.d.ts'
import type { Object2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanMap$Entry.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2BooleanLinkedOpenCustomHashMap$EntryIterator extends Object2BooleanLinkedOpenCustomHashMap$MapIterator<Object> implements ObjectListIterator<Object2BooleanMap$Entry<K>> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: Object)
    // private entry: Object2BooleanLinkedOpenCustomHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Object2BooleanMap$Entry<K>) => void, arg1: number): void;
    add<K extends unknown>(arg0: Object2BooleanMap$Entry<K>): void;
    next<K extends unknown>(): Object2BooleanLinkedOpenCustomHashMap$MapEntry;
    previous<K extends unknown>(): Object2BooleanLinkedOpenCustomHashMap$MapEntry;
    remove(): void;
    set<K extends unknown>(arg0: Object2BooleanMap$Entry<K>): void;
}