import type { Byte2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2LongMap$Entry.d.ts'
import type { Byte2LongOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2LongOpenHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Byte2LongOpenHashMap$EntrySpliterator extends Byte2LongOpenHashMap$MapSpliterator<(param0: Byte2LongMap$Entry) => void, Byte2LongOpenHashMap$EntrySpliterator> implements ObjectSpliterator<Byte2LongMap$Entry> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Byte2LongOpenHashMap$EntrySpliterator)
    constructor(null_: Byte2LongOpenHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Byte2LongMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Byte2LongOpenHashMap$EntrySpliterator;
    skip(arg0: number): number;
}