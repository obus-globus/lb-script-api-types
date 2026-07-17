import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Short2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharMap$Entry.d.ts'
import type { Short2CharOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharOpenHashMap$MapEntry.d.ts'
import type { Short2CharOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Short2CharOpenHashMap$FastEntryIterator extends Short2CharOpenHashMap$MapIterator<(param0: Short2CharMap$Entry) => void> implements ObjectIterator<Short2CharMap$Entry> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Short2CharOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Short2CharMap$Entry) => void, arg1: number): void;
    next(): Short2CharOpenHashMap$MapEntry;
    skip(arg0: number): number;
}