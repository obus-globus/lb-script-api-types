import type { Byte2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ByteMap$Entry.d.ts'
import type { Byte2ByteOpenCustomHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ByteOpenCustomHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Byte2ByteOpenCustomHashMap$EntrySpliterator extends Byte2ByteOpenCustomHashMap$MapSpliterator<(param0: Byte2ByteMap$Entry) => void, Byte2ByteOpenCustomHashMap$EntrySpliterator> implements ObjectSpliterator<Byte2ByteMap$Entry> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Byte2ByteOpenCustomHashMap$EntrySpliterator)
    constructor(null_: Byte2ByteOpenCustomHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Byte2ByteMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Byte2ByteOpenCustomHashMap$EntrySpliterator;
    skip(arg0: number): number;
}