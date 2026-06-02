import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Short2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2LongMap$Entry.d.ts'
import type { Short2LongOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2LongOpenHashMap$MapSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Short2LongOpenHashMap$EntrySpliterator extends Short2LongOpenHashMap$MapSpliterator<(param0: Short2LongMap$Entry) => void, Short2LongOpenHashMap$EntrySpliterator> implements ObjectSpliterator<Short2LongMap$Entry> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Short2LongOpenHashMap$EntrySpliterator)
    constructor(null_: Short2LongOpenHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Short2LongMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Short2LongOpenHashMap$EntrySpliterator;
    skip(arg0: number): number;
}