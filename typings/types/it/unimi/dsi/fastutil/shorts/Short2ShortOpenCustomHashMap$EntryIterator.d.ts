import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Short2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ShortMap$Entry.d.ts'
import type { Short2ShortOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ShortOpenCustomHashMap$MapEntry.d.ts'
import type { Short2ShortOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ShortOpenCustomHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Short2ShortOpenCustomHashMap$EntryIterator extends Short2ShortOpenCustomHashMap$MapIterator<(param0: Short2ShortMap$Entry) => void> implements ObjectIterator<Short2ShortMap$Entry> {
    private constructor(null_: Short2ShortOpenCustomHashMap$EntryIterator)
    // private entry: Short2ShortOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Short2ShortMap$Entry) => void, arg1: number): void;
    next(): Short2ShortOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}