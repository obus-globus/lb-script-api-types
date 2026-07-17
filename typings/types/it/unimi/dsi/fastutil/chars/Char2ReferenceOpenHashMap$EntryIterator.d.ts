import type { Char2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceMap$Entry.d.ts'
import type { Char2ReferenceOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceOpenHashMap$MapEntry.d.ts'
import type { Char2ReferenceOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ReferenceOpenHashMap$EntryIterator extends Char2ReferenceOpenHashMap$MapIterator<Object> implements ObjectIterator<Char2ReferenceMap$Entry<V>> {
    private constructor(null_: { [key: string]: any })
    // private entry: Char2ReferenceOpenHashMap$MapEntry;
    acceptOnIndex<V extends unknown>(arg0: (param0: Char2ReferenceMap$Entry<V>) => void, arg1: number): void;
    next<V extends unknown>(): Char2ReferenceOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}