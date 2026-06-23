import type { Char2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceMap$Entry.d.ts'
import type { Char2ReferenceOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceOpenCustomHashMap$MapEntry.d.ts'
import type { Char2ReferenceOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ReferenceOpenCustomHashMap$FastEntryIterator extends Char2ReferenceOpenCustomHashMap$MapIterator<Object> implements ObjectIterator<Char2ReferenceMap$Entry<V>> {
    private constructor(null_: Char2ReferenceOpenCustomHashMap$FastEntryIterator)
    // private entry: Char2ReferenceOpenCustomHashMap$MapEntry;
    acceptOnIndex<V extends unknown>(arg0: (param0: Char2ReferenceMap$Entry<V>) => void, arg1: number): void;
    next<V extends unknown>(): Char2ReferenceOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}