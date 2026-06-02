import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Short2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharMap$Entry.d.ts'
import type { Short2CharOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharOpenHashMap$MapSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Short2CharOpenHashMap$EntrySpliterator extends Short2CharOpenHashMap$MapSpliterator<(param0: Short2CharMap$Entry) => void, Short2CharOpenHashMap$EntrySpliterator> implements ObjectSpliterator<Short2CharMap$Entry> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Short2CharOpenHashMap$EntrySpliterator)
    constructor(null_: Short2CharOpenHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Short2CharMap$Entry) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Short2CharOpenHashMap$EntrySpliterator;
    skip(arg0: number): number;
}