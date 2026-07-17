import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Float2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2FloatMap$Entry.d.ts'
import type { Float2FloatOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2FloatOpenHashMap$MapEntry.d.ts'
import type { Float2FloatOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2FloatOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Float2FloatOpenHashMap$EntryIterator extends Float2FloatOpenHashMap$MapIterator<(param0: Float2FloatMap$Entry) => void> implements ObjectIterator<Float2FloatMap$Entry> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Float2FloatOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Float2FloatMap$Entry) => void, arg1: number): void;
    next(): Float2FloatOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}