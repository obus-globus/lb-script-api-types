import type { Float2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntMap$Entry.d.ts'
import type { Float2IntOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntOpenHashMap$MapEntry.d.ts'
import type { Float2IntOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Float2IntOpenHashMap$FastEntryIterator extends Float2IntOpenHashMap$MapIterator<(param0: Float2IntMap$Entry) => void> implements ObjectIterator<Float2IntMap$Entry> {
    private constructor(null_: Float2IntOpenHashMap$FastEntryIterator)
    // private entry: Float2IntOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Float2IntMap$Entry) => void, arg1: number): void;
    next(): Float2IntOpenHashMap$MapEntry;
    skip(arg0: number): number;
}