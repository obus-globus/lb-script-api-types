import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ReferenceMap$Entry.d.ts'
import type { Reference2ReferenceOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ReferenceOpenHashMap$MapEntry.d.ts'
import type { Reference2ReferenceOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ReferenceOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ReferenceOpenHashMap$EntryIterator extends Reference2ReferenceOpenHashMap$MapIterator<Object> implements ObjectIterator<Reference2ReferenceMap$Entry<K, V>> {
    private constructor(null_: Reference2ReferenceOpenHashMap$EntryIterator)
    // private entry: Reference2ReferenceOpenHashMap$MapEntry;
    acceptOnIndex<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(arg0: (param0: Reference2ReferenceMap$Entry<K, V>) => void, arg1: number): void;
    next<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(): Reference2ReferenceOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}