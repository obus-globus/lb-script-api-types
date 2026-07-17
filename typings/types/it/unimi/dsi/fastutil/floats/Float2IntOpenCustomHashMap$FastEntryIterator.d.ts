import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Float2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntMap$Entry.d.ts'
import type { Float2IntOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntOpenCustomHashMap$MapEntry.d.ts'
import type { Float2IntOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Float2IntOpenCustomHashMap$FastEntryIterator extends Float2IntOpenCustomHashMap$MapIterator<(param0: Float2IntMap$Entry) => void> implements ObjectIterator<Float2IntMap$Entry> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Float2IntOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Float2IntMap$Entry) => void, arg1: number): void;
    next(): Float2IntOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}