import type { Float2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharMap$Entry.d.ts'
import type { Float2CharOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharOpenHashMap$MapEntry.d.ts'
import type { Float2CharOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Float2CharOpenHashMap$FastEntryIterator extends Float2CharOpenHashMap$MapIterator<(param0: Float2CharMap$Entry) => void> implements ObjectIterator<Float2CharMap$Entry> {
    private constructor(null_: Float2CharOpenHashMap$FastEntryIterator)
    // private entry: Float2CharOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Float2CharMap$Entry) => void, arg1: number): void;
    next(): Float2CharOpenHashMap$MapEntry;
    skip(arg0: number): number;
}