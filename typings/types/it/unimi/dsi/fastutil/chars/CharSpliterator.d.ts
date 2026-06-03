import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { CharConsumer } from '../../../../../it/unimi/dsi/fastutil/chars/CharConsumer.d.ts'
import type { Spliterator$OfPrimitive } from '../../../../../java/util/Spliterator$OfPrimitive.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CharSpliterator extends Spliterator$OfPrimitive<string, (param0: string) => void, CharSpliterator>, Object{
    forEachRemaining(arg0: (param0: string) => void): void;
    forEachRemaining(arg0: (param0: string) => void): void;
    forEachRemaining<T_CONS extends Object | number | string | boolean>(arg0: T_CONS): void;
    getComparator(): (param0: string, param1: string) => kotlin.Int;
    skip(arg0: number): number;
    tryAdvance(arg0: (param0: string) => void): boolean;
    trySplit(): CharSpliterator;
}