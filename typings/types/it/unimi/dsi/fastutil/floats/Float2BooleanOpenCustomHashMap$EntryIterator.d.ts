import type { Float2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2BooleanMap$Entry.d.ts'
import type { Float2BooleanOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2BooleanOpenCustomHashMap$MapEntry.d.ts'
import type { Float2BooleanOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2BooleanOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Float2BooleanOpenCustomHashMap$EntryIterator extends Float2BooleanOpenCustomHashMap$MapIterator<(param0: Float2BooleanMap$Entry) => void> implements ObjectIterator<Float2BooleanMap$Entry> {
    private constructor(null_: Float2BooleanOpenCustomHashMap$EntryIterator)
    // private entry: Float2BooleanOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Float2BooleanMap$Entry) => void, arg1: number): void;
    next(): Float2BooleanOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}