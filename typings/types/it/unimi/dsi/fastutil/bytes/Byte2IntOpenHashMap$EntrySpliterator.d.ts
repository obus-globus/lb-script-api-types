import type { Byte2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2IntMap$Entry.d.ts'
import type { Byte2IntOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2IntOpenHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Byte2IntOpenHashMap$EntrySpliterator extends Byte2IntOpenHashMap$MapSpliterator<(param0: Byte2IntMap$Entry) => void, Byte2IntOpenHashMap$EntrySpliterator> implements ObjectSpliterator<Byte2IntMap$Entry> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Byte2IntOpenHashMap$EntrySpliterator)
    constructor(null_: Byte2IntOpenHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Byte2IntMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Byte2IntOpenHashMap$EntrySpliterator;
    skip(arg0: number): number;
}