import type { Spliterator$OfPrimitive } from '../../java/util/Spliterator$OfPrimitive.d.ts'
import type { Consumer } from '../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Spliterator$OfInt extends Spliterator$OfPrimitive<number, (param0: number) => void, Spliterator$OfInt>, Object{
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining<T_CONS extends Object | number | string | boolean>(arg0: T_CONS): void;
    tryAdvance(arg0: (param0: number) => void): boolean;
    trySplit(): Spliterator$OfInt;
}