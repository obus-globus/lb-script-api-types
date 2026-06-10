import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ObjectMap$Entry.d.ts'
import type { Reference2ObjectOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ObjectOpenCustomHashMap$MapEntry.d.ts'
import type { Reference2ObjectOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ObjectOpenCustomHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ObjectOpenCustomHashMap$EntryIterator extends Reference2ObjectOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<Reference2ObjectMap$Entry<K, V>> {
    private constructor(null_: Reference2ObjectOpenCustomHashMap$EntryIterator)
    // private entry: Reference2ObjectOpenCustomHashMap$MapEntry;
    acceptOnIndex<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(arg0: (param0: Reference2ObjectMap$Entry<K, V>) => void, arg1: number): void;
    next<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(): Reference2ObjectOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}