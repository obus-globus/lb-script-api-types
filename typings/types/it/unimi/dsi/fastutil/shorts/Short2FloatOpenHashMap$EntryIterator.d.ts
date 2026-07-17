import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Short2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2FloatMap$Entry.d.ts'
import type { Short2FloatOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2FloatOpenHashMap$MapEntry.d.ts'
import type { Short2FloatOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2FloatOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Short2FloatOpenHashMap$EntryIterator extends Short2FloatOpenHashMap$MapIterator<(param0: Short2FloatMap$Entry) => void> implements ObjectIterator<Short2FloatMap$Entry> {
    private constructor(null_: { [key: string]: any })
    // private entry: Short2FloatOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Short2FloatMap$Entry) => void, arg1: number): void;
    next(): Short2FloatOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}