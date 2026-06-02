import type { BooleanComparator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanComparator.d.ts'
import type { BooleanConsumer } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { BooleanSpliterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanSpliterator.d.ts'
import type { Spliterator } from '../../../../../java/util/Spliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanSpliterators$SpliteratorWrapper extends Object implements BooleanSpliterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: Spliterator<boolean>)
    // private i: Spliterator<boolean>;
    characteristics(): number;
    estimateSize(): number;
    forEachRemaining(arg0: (param0: boolean) => void): void;
    forEachRemaining(arg0: (param0: boolean) => void): void;
    forEachRemaining(arg0: (param0: boolean) => void): void;
    getComparator(): (param0: boolean, param1: boolean) => kotlin.Int;
    getComparator(): (param0: boolean, param1: boolean) => kotlin.Int;
    skip(arg0: number): number;
    tryAdvance(arg0: (param0: boolean) => void): boolean;
    tryAdvance(arg0: (param0: boolean) => void): boolean;
    tryAdvance(arg0: (param0: boolean) => void): boolean;
    trySplit(): BooleanSpliterator;
}