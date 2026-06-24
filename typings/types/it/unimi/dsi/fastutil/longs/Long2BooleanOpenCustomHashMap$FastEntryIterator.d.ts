import type { Long2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2BooleanMap$Entry.d.ts'
import type { Long2BooleanOpenCustomHashMap$MapEntry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2BooleanOpenCustomHashMap$MapEntry.d.ts'
import type { Long2BooleanOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2BooleanOpenCustomHashMap$MapIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2BooleanOpenCustomHashMap$FastEntryIterator extends Long2BooleanOpenCustomHashMap$MapIterator<(param0: Long2BooleanMap$Entry) => void> implements ObjectIterator<Long2BooleanMap$Entry> {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    // private entry: Long2BooleanOpenCustomHashMap$MapEntry;
    acceptOnIndex(arg0: (param0: Long2BooleanMap$Entry) => void, arg1: number): void;
    next(): Long2BooleanOpenCustomHashMap$MapEntry;
    skip(arg0: number): number;
}