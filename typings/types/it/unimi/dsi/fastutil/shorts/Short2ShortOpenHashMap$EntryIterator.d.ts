import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Short2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ShortMap$Entry.d.ts'
import type { Short2ShortOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ShortOpenHashMap$MapEntry.d.ts'
import type { Short2ShortOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ShortOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ShortOpenHashMap$EntryIterator extends Short2ShortOpenHashMap$MapIterator<(param0: Short2ShortMap$Entry) => void> implements ObjectIterator<Short2ShortMap$Entry> {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Short2ShortOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Short2ShortMap$Entry) => void, arg1: number): void;
    next(): Short2ShortOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}