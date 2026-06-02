import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Short2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2FloatMap$Entry.d.ts'
import type { Short2FloatOpenCustomHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2FloatOpenCustomHashMap$MapSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Short2FloatOpenCustomHashMap$EntrySpliterator extends Short2FloatOpenCustomHashMap$MapSpliterator<(param0: Short2FloatMap$Entry) => void, Short2FloatOpenCustomHashMap$EntrySpliterator> implements ObjectSpliterator<Short2FloatMap$Entry> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Short2FloatOpenCustomHashMap$EntrySpliterator)
    constructor(null_: Short2FloatOpenCustomHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Short2FloatMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Short2FloatOpenCustomHashMap$EntrySpliterator;
    skip(arg0: number): number;
}