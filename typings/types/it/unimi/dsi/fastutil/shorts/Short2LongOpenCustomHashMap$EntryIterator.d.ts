import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Short2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2LongMap$Entry.d.ts'
import type { Short2LongOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2LongOpenCustomHashMap$MapEntry.d.ts'
import type { Short2LongOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2LongOpenCustomHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Short2LongOpenCustomHashMap$EntryIterator extends Short2LongOpenCustomHashMap$MapIterator<(param0: Short2LongMap$Entry) => void> implements ObjectIterator<Short2LongMap$Entry> {
    private constructor(null_: Short2LongOpenCustomHashMap$EntryIterator)
    // private entry: Short2LongOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Short2LongMap$Entry) => void, arg1: number): void;
    next(): Short2LongOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}