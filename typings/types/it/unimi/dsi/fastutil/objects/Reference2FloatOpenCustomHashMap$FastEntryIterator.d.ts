import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2FloatMap$Entry.d.ts'
import type { Reference2FloatOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2FloatOpenCustomHashMap$MapEntry.d.ts'
import type { Reference2FloatOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2FloatOpenCustomHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2FloatOpenCustomHashMap$FastEntryIterator extends Reference2FloatOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<Reference2FloatMap$Entry<K>> {
    private constructor(null_: Reference2FloatOpenCustomHashMap$FastEntryIterator)
    // private entry: Reference2FloatOpenCustomHashMap$MapEntry;
    acceptOnIndex<K extends Object | number | string | boolean>(arg0: (param0: Reference2FloatMap$Entry<K>) => void, arg1: number): void;
    next<K extends Object | number | string | boolean>(): Reference2FloatOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}