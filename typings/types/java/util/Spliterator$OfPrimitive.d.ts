import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { Spliterator } from '../../java/util/Spliterator.d.ts'
import type { Consumer } from '../../java/util/function/Consumer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Spliterator$OfPrimitive<T extends Object | number | string | boolean, T_CONS extends Object | number | string | boolean, T_SPLITR extends Spliterator$OfPrimitive<T, T_CONS, T_SPLITR>> extends Spliterator<T>, Object{
    forEachRemaining(arg0: T_CONS): void;
    forEachRemaining(arg0: (param0: T) => void): void;
    getComparator(): (param0: T) => kotlin.Boolean;
    getExactSizeIfKnown(): number;
    hasCharacteristics(arg0: number): boolean;
    tryAdvance(arg0: T_CONS): boolean;
    trySplit(): T_SPLITR;
}