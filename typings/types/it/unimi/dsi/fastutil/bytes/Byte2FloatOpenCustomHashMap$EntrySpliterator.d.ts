import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Byte2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2FloatMap$Entry.d.ts'
import type { Byte2FloatOpenCustomHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2FloatOpenCustomHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Byte2FloatOpenCustomHashMap$EntrySpliterator extends Byte2FloatOpenCustomHashMap$MapSpliterator<(param0: Byte2FloatMap$Entry) => void, Byte2FloatOpenCustomHashMap$EntrySpliterator> implements ObjectSpliterator<Byte2FloatMap$Entry> {
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
    acceptOnIndex(arg0: (param0: Byte2FloatMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Byte2FloatOpenCustomHashMap$EntrySpliterator;
    skip(arg0: number): number;
}