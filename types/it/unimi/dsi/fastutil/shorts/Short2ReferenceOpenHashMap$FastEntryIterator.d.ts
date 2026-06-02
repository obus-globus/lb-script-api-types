import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Short2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceMap$Entry.d.ts'
import type { Short2ReferenceOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceOpenHashMap$MapEntry.d.ts'
import type { Short2ReferenceOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Short2ReferenceOpenHashMap$FastEntryIterator extends Short2ReferenceOpenHashMap$MapIterator<Object> implements ObjectIterator<Short2ReferenceMap$Entry<V>> {
    private constructor(null_: Short2ReferenceOpenHashMap$FastEntryIterator)
    // private entry: Short2ReferenceOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Short2ReferenceMap$Entry<V>) => void, arg1: number): void;
    next(): Short2ReferenceOpenHashMap$MapEntry;
    skip(arg0: number): number;
}