import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Short2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2IntMap$Entry.d.ts'
import type { Short2IntOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2IntOpenHashMap$MapEntry.d.ts'
import type { Short2IntOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2IntOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Short2IntOpenHashMap$EntryIterator extends Short2IntOpenHashMap$MapIterator<(param0: Short2IntMap$Entry) => void> implements ObjectIterator<Short2IntMap$Entry> {
    private constructor(null_: { [key: string]: any })
    // private entry: Short2IntOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Short2IntMap$Entry) => void, arg1: number): void;
    next(): Short2IntOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}