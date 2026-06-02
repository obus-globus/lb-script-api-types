import type { ShortComparator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortComparator.d.ts'
import type { ShortConsumer } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortConsumer.d.ts'
import type { ShortSpliterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShortSpliterators$SingletonSpliterator extends Object implements ShortSpliterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: number)
    constructor(arg0: number, arg1: (param0: number, param1: number) => kotlin.Int)
    readonly comparator: (param0: number, param1: number) => kotlin.Int;
    // private consumed: boolean;
    // private element: number;
    characteristics(): number;
    estimateSize(): number;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    getComparator(): (param0: number, param1: number) => kotlin.Int;
    getComparator(): (param0: number, param1: number) => kotlin.Int;
    skip(arg0: number): number;
    skip(arg0: number): number;
    tryAdvance(arg0: (param0: number) => void): boolean;
    tryAdvance(arg0: (param0: number) => void): boolean;
    trySplit(): ShortSpliterator;
}