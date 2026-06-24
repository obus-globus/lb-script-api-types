import type { Float2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntMap$Entry.d.ts'
import type { Float2IntOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntOpenCustomHashMap$MapEntry.d.ts'
import type { Float2IntOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2IntOpenCustomHashMap$EntryIterator extends Float2IntOpenCustomHashMap$MapIterator<(param0: Float2IntMap$Entry) => void> implements ObjectIterator<Float2IntMap$Entry> {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Float2IntOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Float2IntMap$Entry) => void, arg1: number): void;
    next(): Float2IntOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}