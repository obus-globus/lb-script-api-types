import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Short2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2LongMap$Entry.d.ts'
import type { Short2LongOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2LongOpenHashMap$MapEntry.d.ts'
import type { Short2LongOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2LongOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2LongOpenHashMap$FastEntryIterator extends Short2LongOpenHashMap$MapIterator<(param0: Short2LongMap$Entry) => void> implements ObjectIterator<Short2LongMap$Entry> {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Short2LongOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Short2LongMap$Entry) => void, arg1: number): void;
    next(): Short2LongOpenHashMap$MapEntry;
    skip(arg0: number): number;
}