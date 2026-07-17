import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Float2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharMap$Entry.d.ts'
import type { Float2CharOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharOpenHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Float2CharOpenHashMap$EntrySpliterator extends Float2CharOpenHashMap$MapSpliterator<(param0: Float2CharMap$Entry) => void, Float2CharOpenHashMap$EntrySpliterator> implements ObjectSpliterator<Float2CharMap$Entry> {
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
    acceptOnIndex(arg0: (param0: Float2CharMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Float2CharOpenHashMap$EntrySpliterator;
    skip(arg0: number): number;
}