import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Short2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2BooleanMap$Entry.d.ts'
import type { Short2BooleanOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2BooleanOpenCustomHashMap$MapEntry.d.ts'
import type { Short2BooleanOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2BooleanOpenCustomHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Short2BooleanOpenCustomHashMap$FastEntryIterator extends Short2BooleanOpenCustomHashMap$MapIterator<(param0: Short2BooleanMap$Entry) => void> implements ObjectIterator<Short2BooleanMap$Entry> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Short2BooleanOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Short2BooleanMap$Entry) => void, arg1: number): void;
    next(): Short2BooleanOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}