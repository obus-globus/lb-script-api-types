import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Short2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2BooleanMap$Entry.d.ts'
import type { Short2BooleanOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2BooleanOpenHashMap$MapEntry.d.ts'
import type { Short2BooleanOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2BooleanOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2BooleanOpenHashMap$FastEntryIterator extends Short2BooleanOpenHashMap$MapIterator<(param0: Short2BooleanMap$Entry) => void> implements ObjectIterator<Short2BooleanMap$Entry> {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Short2BooleanOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Short2BooleanMap$Entry) => void, arg1: number): void;
    next(): Short2BooleanOpenHashMap$MapEntry;
    skip(arg0: number): number;
}