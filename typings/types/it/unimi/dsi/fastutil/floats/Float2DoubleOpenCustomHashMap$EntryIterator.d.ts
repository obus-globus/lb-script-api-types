import type { Float2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2DoubleMap$Entry.d.ts'
import type { Float2DoubleOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2DoubleOpenCustomHashMap$MapEntry.d.ts'
import type { Float2DoubleOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2DoubleOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Float2DoubleOpenCustomHashMap$EntryIterator extends Float2DoubleOpenCustomHashMap$MapIterator<(param0: Float2DoubleMap$Entry) => void> implements ObjectIterator<Float2DoubleMap$Entry> {
    private constructor(null_: { [key: string]: any })
    // private entry: Float2DoubleOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Float2DoubleMap$Entry) => void, arg1: number): void;
    next(): Float2DoubleOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}