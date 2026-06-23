import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Short2ObjectOpenCustomHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectOpenCustomHashMap$MapSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ObjectOpenCustomHashMap$ValueSpliterator extends Short2ObjectOpenCustomHashMap$MapSpliterator<Object, any> implements ObjectSpliterator<V> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Short2ObjectOpenCustomHashMap$ValueSpliterator)
    constructor(null_: Short2ObjectOpenCustomHashMap$ValueSpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex<V extends unknown>(arg0: (param0: V) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit<V extends unknown>(arg0: number, arg1: number, arg2: boolean): Short2ObjectOpenCustomHashMap$ValueSpliterator;
    skip(arg0: number): number;
}