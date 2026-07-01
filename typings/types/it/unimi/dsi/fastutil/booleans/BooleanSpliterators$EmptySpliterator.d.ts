import type { BooleanComparator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanComparator.d.ts'
import type { BooleanConsumer } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { BooleanSpliterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanSpliterator.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class BooleanSpliterators$EmptySpliterator extends Object implements BooleanSpliterator, Serializable, Cloneable {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor()
    characteristics(): number;
    clone(): Object;
    estimateSize(): number;
    forEachRemaining(arg0: (param0: boolean) => void): void;
    getComparator(): (param0: boolean, param1: boolean) => number;
    // private readResolve(): Object;
    skip(arg0: number): number;
    tryAdvance(arg0: (param0: boolean) => void): boolean;
    trySplit(): BooleanSpliterator;
}