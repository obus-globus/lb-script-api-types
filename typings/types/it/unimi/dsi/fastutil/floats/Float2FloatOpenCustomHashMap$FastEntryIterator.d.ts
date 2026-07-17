import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Float2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2FloatMap$Entry.d.ts'
import type { Float2FloatOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2FloatOpenCustomHashMap$MapEntry.d.ts'
import type { Float2FloatOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2FloatOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Float2FloatOpenCustomHashMap$FastEntryIterator extends Float2FloatOpenCustomHashMap$MapIterator<(param0: Float2FloatMap$Entry) => void> implements ObjectIterator<Float2FloatMap$Entry> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Float2FloatOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Float2FloatMap$Entry) => void, arg1: number): void;
    next(): Float2FloatOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}