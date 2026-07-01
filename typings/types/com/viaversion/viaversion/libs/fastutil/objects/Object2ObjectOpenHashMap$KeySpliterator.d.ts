import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Object2ObjectOpenHashMap$KeySpliterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Map<Object, Object>)
    constructor(null_: Map<Object, Object>, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex<K extends unknown>(arg0: (param0: K) => void, arg1: number): void;
    characteristics(): number;
    makeForSplit<K extends unknown, V extends unknown>(arg0: number, arg1: number, arg2: boolean): Object2ObjectOpenHashMap$KeySpliterator;
}