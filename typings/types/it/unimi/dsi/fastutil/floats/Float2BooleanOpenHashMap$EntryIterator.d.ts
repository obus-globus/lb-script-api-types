import type { Float2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2BooleanMap$Entry.d.ts'
import type { Float2BooleanOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2BooleanOpenHashMap$MapEntry.d.ts'
import type { Float2BooleanOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2BooleanOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Float2BooleanOpenHashMap$EntryIterator extends Float2BooleanOpenHashMap$MapIterator<(param0: Float2BooleanMap$Entry) => void> implements ObjectIterator<Float2BooleanMap$Entry> {
    private constructor(null_: { [key: string]: any })
    // private entry: Float2BooleanOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Float2BooleanMap$Entry) => void, arg1: number): void;
    next(): Float2BooleanOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}