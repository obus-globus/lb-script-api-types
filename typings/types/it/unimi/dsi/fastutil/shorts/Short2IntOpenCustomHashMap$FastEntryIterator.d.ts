import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Short2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2IntMap$Entry.d.ts'
import type { Short2IntOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2IntOpenCustomHashMap$MapEntry.d.ts'
import type { Short2IntOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2IntOpenCustomHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Short2IntOpenCustomHashMap$FastEntryIterator extends Short2IntOpenCustomHashMap$MapIterator<(param0: Short2IntMap$Entry) => void> implements ObjectIterator<Short2IntMap$Entry> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Short2IntOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Short2IntMap$Entry) => void, arg1: number): void;
    next(): Short2IntOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}