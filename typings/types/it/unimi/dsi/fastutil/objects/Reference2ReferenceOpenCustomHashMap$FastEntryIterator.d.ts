import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ReferenceMap$Entry.d.ts'
import type { Reference2ReferenceOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ReferenceOpenCustomHashMap$MapEntry.d.ts'
import type { Reference2ReferenceOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ReferenceOpenCustomHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Reference2ReferenceOpenCustomHashMap$FastEntryIterator extends Reference2ReferenceOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<Reference2ReferenceMap$Entry<K, V>> {
    private constructor(null_: Reference2ReferenceOpenCustomHashMap$FastEntryIterator)
    // private entry: Reference2ReferenceOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Reference2ReferenceMap$Entry<K, V>) => void, arg1: number): void;
    next(): Reference2ReferenceOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}