import type { Float2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2DoubleMap$Entry.d.ts'
import type { Float2DoubleOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2DoubleOpenHashMap$MapEntry.d.ts'
import type { Float2DoubleOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2DoubleOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Float2DoubleOpenHashMap$FastEntryIterator extends Float2DoubleOpenHashMap$MapIterator<(param0: Float2DoubleMap$Entry) => void> implements ObjectIterator<Float2DoubleMap$Entry> {
    private constructor(null_: Float2DoubleOpenHashMap$FastEntryIterator)
    // private entry: Float2DoubleOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Float2DoubleMap$Entry) => void, arg1: number): void;
    next(): Float2DoubleOpenHashMap$MapEntry;
    skip(arg0: number): number;
}