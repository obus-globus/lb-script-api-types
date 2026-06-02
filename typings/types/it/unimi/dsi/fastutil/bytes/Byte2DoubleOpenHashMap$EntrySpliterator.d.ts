import type { Byte2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2DoubleMap$Entry.d.ts'
import type { Byte2DoubleOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2DoubleOpenHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Byte2DoubleOpenHashMap$EntrySpliterator extends Byte2DoubleOpenHashMap$MapSpliterator<(param0: Byte2DoubleMap$Entry) => void, Byte2DoubleOpenHashMap$EntrySpliterator> implements ObjectSpliterator<Byte2DoubleMap$Entry> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Byte2DoubleOpenHashMap$EntrySpliterator)
    constructor(null_: Byte2DoubleOpenHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Byte2DoubleMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Byte2DoubleOpenHashMap$EntrySpliterator;
    skip(arg0: number): number;
}