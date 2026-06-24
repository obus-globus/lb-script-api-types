import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2LongMap$Entry.d.ts'
import type { Reference2LongOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2LongOpenCustomHashMap$MapEntry.d.ts'
import type { Reference2LongOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2LongOpenCustomHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2LongOpenCustomHashMap$EntryIterator extends Reference2LongOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<Reference2LongMap$Entry<K>> {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Reference2LongOpenCustomHashMap$MapEntry;
    acceptOnIndex<K extends unknown>(arg0: (param0: Reference2LongMap$Entry<K>) => void, arg1: number): void;
    next<K extends unknown>(): Reference2LongOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}