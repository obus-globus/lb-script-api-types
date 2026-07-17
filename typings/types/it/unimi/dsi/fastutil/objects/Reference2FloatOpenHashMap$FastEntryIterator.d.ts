import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2FloatMap$Entry.d.ts'
import type { Reference2FloatOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2FloatOpenHashMap$MapEntry.d.ts'
import type { Reference2FloatOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2FloatOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2FloatOpenHashMap$FastEntryIterator extends Reference2FloatOpenHashMap$MapIterator<Object> implements ObjectIterator<Reference2FloatMap$Entry<K>> {
    private constructor(null_: { [key: string]: any })
    // private entry: Reference2FloatOpenHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Reference2FloatMap$Entry<K>) => void, arg1: number): void;
    next<K extends unknown>(): Reference2FloatOpenHashMap$MapEntry;
    skip(arg0: number): number;
}