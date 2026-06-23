import type { Spliterator } from '../../../../../java/util/Spliterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IOComparator } from '../../../../../org/apache/commons/io/function/IOComparator.d.ts'
import type { IOConsumer } from '../../../../../org/apache/commons/io/function/IOConsumer.d.ts'
export interface IOSpliterator<T extends unknown> extends Object {
    asSpliterator(): Spliterator<T>;
    characteristics(): number;
    estimateSize(): number;
    forEachRemaining(arg0: (param0: T) => void): void;
    getComparator(): (param0: T, param1: T) => number;
    getExactSizeIfKnown(): number;
    hasCharacteristics(arg0: number): boolean;
    tryAdvance(arg0: (param0: T) => void): boolean;
    trySplit(): IOSpliterator<T>;
    unwrap(): Spliterator<T>;
}