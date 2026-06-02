import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { CharConsumer } from '../../../../../it/unimi/dsi/fastutil/chars/CharConsumer.d.ts'
import type { CharSpliterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharSpliterators$SingletonSpliterator extends Object implements CharSpliterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: string)
    constructor(arg0: string, arg1: (param0: string, param1: string) => kotlin.Int)
    readonly comparator: (param0: string, param1: string) => kotlin.Int;
    // private consumed: boolean;
    // private element: string;
    characteristics(): number;
    estimateSize(): number;
    forEachRemaining(arg0: (param0: string) => void): void;
    forEachRemaining(arg0: (param0: string) => void): void;
    getComparator(): (param0: string, param1: string) => kotlin.Int;
    getComparator(): (param0: string, param1: string) => kotlin.Int;
    skip(arg0: number): number;
    skip(arg0: number): number;
    tryAdvance(arg0: (param0: string) => void): boolean;
    tryAdvance(arg0: (param0: string) => void): boolean;
    trySplit(): CharSpliterator;
}