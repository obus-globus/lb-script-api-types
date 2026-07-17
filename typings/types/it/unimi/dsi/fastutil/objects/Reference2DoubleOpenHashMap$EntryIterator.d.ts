import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2DoubleMap$Entry.d.ts'
import type { Reference2DoubleOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2DoubleOpenHashMap$MapEntry.d.ts'
import type { Reference2DoubleOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2DoubleOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2DoubleOpenHashMap$EntryIterator extends Reference2DoubleOpenHashMap$MapIterator<Object> implements ObjectIterator<Reference2DoubleMap$Entry<K>> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Reference2DoubleOpenHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Reference2DoubleMap$Entry<K>) => void, arg1: number): void;
    next<K extends unknown>(): Reference2DoubleOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}