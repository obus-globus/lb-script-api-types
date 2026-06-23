import type { Char2ObjectOpenCustomHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectOpenCustomHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ObjectOpenCustomHashMap$ValueSpliterator extends Char2ObjectOpenCustomHashMap$MapSpliterator<Object, any> implements ObjectSpliterator<V> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Char2ObjectOpenCustomHashMap$ValueSpliterator)
    constructor(null_: Char2ObjectOpenCustomHashMap$ValueSpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex<V extends Object | number | string | boolean>(arg0: (param0: V) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit<V extends Object | number | string | boolean>(arg0: number, arg1: number, arg2: boolean): Char2ObjectOpenCustomHashMap$ValueSpliterator;
    skip(arg0: number): number;
}