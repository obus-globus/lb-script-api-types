import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { CharConsumer } from '../../../../../it/unimi/dsi/fastutil/chars/CharConsumer.d.ts'
import type { CharSpliterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharSpliterator.d.ts'
import type { Object2CharOpenHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharOpenHashMap$MapSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2CharOpenHashMap$ValueSpliterator extends Object2CharOpenHashMap$MapSpliterator<Object, any> implements CharSpliterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Object2CharOpenHashMap$ValueSpliterator)
    constructor(null_: Object2CharOpenHashMap$ValueSpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: string) => void, arg1: number): void;
    characteristics(): number;
    forEachRemaining(arg0: (param0: string) => void): void;
    getComparator(): (param0: string, param1: string) => number;
    makeForSplit<K extends unknown>(arg0: number, arg1: number, arg2: boolean): Object2CharOpenHashMap$ValueSpliterator;
    skip(arg0: number): number;
    tryAdvance(arg0: (param0: string) => void): boolean;
}