import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Long2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2BooleanMap$Entry.d.ts'
import type { Long2BooleanOpenHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2BooleanOpenHashMap$MapEntry.d.ts'
import type { Long2BooleanOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2BooleanOpenHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Long2BooleanOpenHashMap$EntryIterator extends Long2BooleanOpenHashMap$MapIterator<(param0: Long2BooleanMap$Entry) => void> implements ObjectIterator<Long2BooleanMap$Entry> {
    private constructor(null_: JavaMap<any, any>)
    // private entry: Long2BooleanOpenHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Long2BooleanMap$Entry) => void, arg1: number): void;
    next(): Long2BooleanOpenHashMap$MapEntry;
    remove(): void;
    skip(arg0: number): number;
}