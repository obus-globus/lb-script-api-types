import type { Byte2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ByteMap$Entry.d.ts'
import type { Byte2ByteOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ByteOpenHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Byte2ByteOpenHashMap$EntrySpliterator extends Byte2ByteOpenHashMap$MapSpliterator<(param0: Byte2ByteMap$Entry) => void, Byte2ByteOpenHashMap$EntrySpliterator> implements ObjectSpliterator<Byte2ByteMap$Entry> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Byte2ByteOpenHashMap$EntrySpliterator)
    constructor(null_: Byte2ByteOpenHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Byte2ByteMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Byte2ByteOpenHashMap$EntrySpliterator;
    skip(arg0: number): number;
}