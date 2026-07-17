import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ShortMap$Entry.d.ts'
import type { Reference2ShortOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ShortOpenHashMap$MapEntry.d.ts'
import type { Reference2ShortOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ShortOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ShortOpenHashMap$EntryIterator extends Reference2ShortOpenHashMap$MapIterator<Object> implements ObjectIterator<Reference2ShortMap$Entry<K>> {
    private constructor(null_: { [key: string]: any })
    // private entry: Reference2ShortOpenHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Reference2ShortMap$Entry<K>) => void, arg1: number): void;
    next<K extends unknown>(): Reference2ShortOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}