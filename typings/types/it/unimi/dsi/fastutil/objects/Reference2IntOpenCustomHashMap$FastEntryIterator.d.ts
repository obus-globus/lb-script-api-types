import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2IntMap$Entry.d.ts'
import type { Reference2IntOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2IntOpenCustomHashMap$MapEntry.d.ts'
import type { Reference2IntOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2IntOpenCustomHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2IntOpenCustomHashMap$FastEntryIterator extends Reference2IntOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<Reference2IntMap$Entry<K>> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Reference2IntOpenCustomHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Reference2IntMap$Entry<K>) => void, arg1: number): void;
    next<K extends unknown>(): Reference2IntOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}