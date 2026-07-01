import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Short2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2FloatMap$Entry.d.ts'
import type { Short2FloatOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2FloatOpenCustomHashMap$MapEntry.d.ts'
import type { Short2FloatOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2FloatOpenCustomHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2FloatOpenCustomHashMap$EntryIterator extends Short2FloatOpenCustomHashMap$MapIterator<(param0: Short2FloatMap$Entry) => void> implements ObjectIterator<Short2FloatMap$Entry> {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Short2FloatOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Short2FloatMap$Entry) => void, arg1: number): void;
    next(): Short2FloatOpenCustomHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}