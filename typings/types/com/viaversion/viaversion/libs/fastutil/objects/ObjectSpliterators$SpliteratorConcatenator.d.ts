import type { ObjectSpliterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectSpliterator.d.ts'
import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ObjectSpliterators$SpliteratorConcatenator<K extends Object | number | string | boolean> extends Object implements ObjectSpliterator<K> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: ObjectSpliterator<K>[], arg1: number, arg2: number)
    // private a: ObjectSpliterator<K>[];
    // private characteristics: number;
    // private length: number;
    // private offset: number;
    // private remainingEstimatedExceptCurrent: number;
    // private advanceNextSpliterator(): void;
    characteristics(): number;
    // private computeCharacteristics(): number;
    estimateSize(): number;
    forEachRemaining(arg0: (param0: K) => void): void;
    getComparator(): (param0: K) => kotlin.Boolean;
    // private recomputeRemaining(): number;
    skip(arg0: number): number;
    tryAdvance(arg0: (param0: K) => void): boolean;
    trySplit(): ObjectSpliterator<K>;
}