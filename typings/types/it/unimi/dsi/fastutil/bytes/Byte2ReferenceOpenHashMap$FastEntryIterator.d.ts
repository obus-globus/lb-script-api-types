import type { Byte2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ReferenceMap$Entry.d.ts'
import type { Byte2ReferenceOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ReferenceOpenHashMap$MapEntry.d.ts'
import type { Byte2ReferenceOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ReferenceOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Byte2ReferenceOpenHashMap$FastEntryIterator extends Byte2ReferenceOpenHashMap$MapIterator<Object> implements ObjectIterator<Byte2ReferenceMap$Entry<V>> {
    private constructor(null_: Byte2ReferenceOpenHashMap$FastEntryIterator)
    // private entry: Byte2ReferenceOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Byte2ReferenceMap$Entry<V>) => void, arg1: number): void;
    next(): Byte2ReferenceOpenHashMap$MapEntry;
    skip(arg0: number): number;
}