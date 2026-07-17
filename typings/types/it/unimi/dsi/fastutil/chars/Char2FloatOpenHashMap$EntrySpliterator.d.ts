import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Char2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatMap$Entry.d.ts'
import type { Char2FloatOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatOpenHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Char2FloatOpenHashMap$EntrySpliterator extends Char2FloatOpenHashMap$MapSpliterator<(param0: Char2FloatMap$Entry) => void, Char2FloatOpenHashMap$EntrySpliterator> implements ObjectSpliterator<Char2FloatMap$Entry> {
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
    acceptOnIndex(arg0: (param0: Char2FloatMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Char2FloatOpenHashMap$EntrySpliterator;
    skip(arg0: number): number;
}