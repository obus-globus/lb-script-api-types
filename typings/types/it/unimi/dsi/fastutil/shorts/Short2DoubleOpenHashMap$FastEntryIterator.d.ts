import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Short2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleMap$Entry.d.ts'
import type { Short2DoubleOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleOpenHashMap$MapEntry.d.ts'
import type { Short2DoubleOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Short2DoubleOpenHashMap$FastEntryIterator extends Short2DoubleOpenHashMap$MapIterator<(param0: Short2DoubleMap$Entry) => void> implements ObjectIterator<Short2DoubleMap$Entry> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Short2DoubleOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Short2DoubleMap$Entry) => void, arg1: number): void;
    next(): Short2DoubleOpenHashMap$MapEntry;
    skip(arg0: number): number;
}