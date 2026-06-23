import type { Object2LongOpenCustomHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongOpenCustomHashMap$MapSpliterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2LongOpenCustomHashMap$KeySpliterator extends Object2LongOpenCustomHashMap$MapSpliterator<Object, any> implements ObjectSpliterator<K> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Object2LongOpenCustomHashMap$KeySpliterator)
    constructor(null_: Object2LongOpenCustomHashMap$KeySpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex<K extends unknown>(arg0: (param0: K) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit<K extends unknown>(arg0: number, arg1: number, arg2: boolean): Object2LongOpenCustomHashMap$KeySpliterator;
    skip(arg0: number): number;
}