import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { CharConsumer } from '../../../../../it/unimi/dsi/fastutil/chars/CharConsumer.d.ts'
import type { CharSpliterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharSpliterator.d.ts'
import type { Object2CharOpenCustomHashMap$MapSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharOpenCustomHashMap$MapSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Object2CharOpenCustomHashMap$ValueSpliterator extends Object2CharOpenCustomHashMap$MapSpliterator<Object, Object> implements CharSpliterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(null_: Object2CharOpenCustomHashMap$ValueSpliterator)
    constructor(null_: Object2CharOpenCustomHashMap$ValueSpliterator, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    acceptOnIndex(arg0: (param0: string) => void, arg1: number): void;
    characteristics(): number;
    forEachRemaining(arg0: (param0: string) => void): void;
    getComparator(): (param0: string, param1: string) => kotlin.Int;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): Object2CharOpenCustomHashMap$ValueSpliterator;
    skip(arg0: number): number;
    tryAdvance(arg0: (param0: string) => void): boolean;
}