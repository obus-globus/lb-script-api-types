import type { Float2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2BooleanMap$Entry.d.ts'
import type { Float2BooleanOpenCustomHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2BooleanOpenCustomHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Float2BooleanOpenCustomHashMap$EntrySpliterator extends Float2BooleanOpenCustomHashMap$MapSpliterator<(param0: Float2BooleanMap$Entry) => void, Float2BooleanOpenCustomHashMap$EntrySpliterator> implements ObjectSpliterator<Float2BooleanMap$Entry> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Float2BooleanOpenCustomHashMap$EntrySpliterator)
    constructor(null_: Float2BooleanOpenCustomHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Float2BooleanMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Float2BooleanOpenCustomHashMap$EntrySpliterator;
    skip(arg0: number): number;
}