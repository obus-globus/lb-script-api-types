import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { Consumer } from '../../java/util/function/Consumer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Spliterator<T extends Object | number | string | boolean> extends Object {
    characteristics(): number;
    estimateSize(): number;
    forEachRemaining(arg0: (param0: T) => void): void;
    getComparator(): (param0: Object) => boolean;
    getExactSizeIfKnown(): number;
    hasCharacteristics(arg0: number): boolean;
    tryAdvance(arg0: (param0: T) => void): boolean;
    trySplit(): Spliterator<T>;
}