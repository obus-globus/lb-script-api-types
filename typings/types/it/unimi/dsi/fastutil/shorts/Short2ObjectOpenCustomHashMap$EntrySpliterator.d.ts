import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Short2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectMap$Entry.d.ts'
import type { Short2ObjectOpenCustomHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectOpenCustomHashMap$MapSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Short2ObjectOpenCustomHashMap$EntrySpliterator extends Short2ObjectOpenCustomHashMap$MapSpliterator<Object, Object> implements ObjectSpliterator<Short2ObjectMap$Entry<V>> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Short2ObjectOpenCustomHashMap$EntrySpliterator)
    constructor(null_: Short2ObjectOpenCustomHashMap$EntrySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: Short2ObjectMap$Entry<V>) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Short2ObjectOpenCustomHashMap$EntrySpliterator;
    skip(arg0: number): number;
}