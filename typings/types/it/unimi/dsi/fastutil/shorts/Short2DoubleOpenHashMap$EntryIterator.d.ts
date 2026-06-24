import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Short2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleMap$Entry.d.ts'
import type { Short2DoubleOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleOpenHashMap$MapEntry.d.ts'
import type { Short2DoubleOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2DoubleOpenHashMap$EntryIterator extends Short2DoubleOpenHashMap$MapIterator<(param0: Short2DoubleMap$Entry) => void> implements ObjectIterator<Short2DoubleMap$Entry> {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Short2DoubleOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Short2DoubleMap$Entry) => void, arg1: number): void;
    next(): Short2DoubleOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}