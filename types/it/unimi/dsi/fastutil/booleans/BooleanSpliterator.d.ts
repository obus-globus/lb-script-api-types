import type { BooleanComparator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanComparator.d.ts'
import type { BooleanConsumer } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { Spliterator$OfPrimitive } from '../../../../../java/util/Spliterator$OfPrimitive.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BooleanSpliterator extends Spliterator$OfPrimitive<boolean, (param0: boolean) => void, BooleanSpliterator>, Object{
    forEachRemaining(arg0: (param0: boolean) => void): void;
    forEachRemaining<T_CONS extends Object | number | string | boolean>(arg0: T_CONS): void;
    getComparator(): (param0: boolean, param1: boolean) => kotlin.Int;
    skip(arg0: number): number;
    tryAdvance(arg0: (param0: boolean) => void): boolean;
    trySplit(): BooleanSpliterator;
}