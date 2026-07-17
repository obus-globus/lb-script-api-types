import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Float2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ByteMap$Entry.d.ts'
import type { Float2ByteOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ByteOpenHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Float2ByteOpenHashMap$EntrySpliterator extends Float2ByteOpenHashMap$MapSpliterator<(param0: Float2ByteMap$Entry) => void, Float2ByteOpenHashMap$EntrySpliterator> implements ObjectSpliterator<Float2ByteMap$Entry> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Float2ByteMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Float2ByteOpenHashMap$EntrySpliterator;
    skip(arg0: number): number;
}