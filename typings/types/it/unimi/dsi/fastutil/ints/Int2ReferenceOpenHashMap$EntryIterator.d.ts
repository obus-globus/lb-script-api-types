import type { Int2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ReferenceMap$Entry.d.ts'
import type { Int2ReferenceOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ReferenceOpenHashMap$MapEntry.d.ts'
import type { Int2ReferenceOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ReferenceOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ReferenceOpenHashMap$EntryIterator extends Int2ReferenceOpenHashMap$MapIterator<Object> implements ObjectIterator<Int2ReferenceMap$Entry<V>> {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Int2ReferenceOpenHashMap$MapEntry;
    acceptOnIndex<V extends unknown>(arg0: (param0: Int2ReferenceMap$Entry<V>) => void, arg1: number): void;
    next<V extends unknown>(): Int2ReferenceOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}