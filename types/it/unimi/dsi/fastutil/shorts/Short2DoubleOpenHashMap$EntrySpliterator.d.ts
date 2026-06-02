import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Short2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleMap$Entry.d.ts'
import type { Short2DoubleOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleOpenHashMap$MapSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Short2DoubleOpenHashMap$EntrySpliterator extends Short2DoubleOpenHashMap$MapSpliterator<(param0: Short2DoubleMap$Entry) => void, Short2DoubleOpenHashMap$EntrySpliterator> implements ObjectSpliterator<Short2DoubleMap$Entry> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Short2DoubleOpenHashMap$EntrySpliterator)
    constructor(null_: Short2DoubleOpenHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Short2DoubleMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Short2DoubleOpenHashMap$EntrySpliterator;
    skip(arg0: number): number;
}