import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Short2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharMap$Entry.d.ts'
import type { Short2CharOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharOpenCustomHashMap$MapEntry.d.ts'
import type { Short2CharOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharOpenCustomHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Short2CharOpenCustomHashMap$FastEntryIterator extends Short2CharOpenCustomHashMap$MapIterator<(param0: Short2CharMap$Entry) => void> implements ObjectIterator<Short2CharMap$Entry> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Short2CharOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Short2CharMap$Entry) => void, arg1: number): void;
    next(): Short2CharOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}