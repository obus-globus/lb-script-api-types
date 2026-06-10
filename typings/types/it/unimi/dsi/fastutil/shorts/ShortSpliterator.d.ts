import type { ShortComparator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortComparator.d.ts'
import type { ShortConsumer } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortConsumer.d.ts'
import type { Spliterator$OfPrimitive } from '../../../../../java/util/Spliterator$OfPrimitive.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ShortSpliterator extends Spliterator$OfPrimitive<number, (param0: number) => void, ShortSpliterator>, Object {
    forEachRemaining(arg0: (param0: number) => void): void;
    getComparator(): (param0: number, param1: number) => number;
    skip(arg0: number): number;
    tryAdvance(arg0: (param0: number) => void): boolean;
    trySplit(): ShortSpliterator;
}