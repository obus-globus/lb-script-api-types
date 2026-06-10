import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2IntMap$Entry.d.ts'
import type { Reference2IntOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2IntOpenHashMap$MapEntry.d.ts'
import type { Reference2IntOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2IntOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2IntOpenHashMap$FastEntryIterator extends Reference2IntOpenHashMap$MapIterator<Object> implements ObjectIterator<Reference2IntMap$Entry<K>> {
    private constructor(null_: Reference2IntOpenHashMap$FastEntryIterator)
    // private entry: Reference2IntOpenHashMap$MapEntry;
    acceptOnIndex<K extends Object | number | string | boolean>(arg0: (param0: Reference2IntMap$Entry<K>) => void, arg1: number): void;
    next<K extends Object | number | string | boolean>(): Reference2IntOpenHashMap$MapEntry;
    skip(arg0: number): number;
}