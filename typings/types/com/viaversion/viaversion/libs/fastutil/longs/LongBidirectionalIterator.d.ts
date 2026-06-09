import type { LongConsumer } from '../../../../../../com/viaversion/viaversion/libs/fastutil/longs/LongConsumer.d.ts'
import type { LongIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/longs/LongIterator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface LongBidirectionalIterator extends LongIterator, ObjectBidirectionalIterator<number>, Object {
    back(arg0: number): number;
    forEachRemaining(arg0: (param0: number) => void): void;
    next(): number;
    previous(): number;
    previousLong(): number;
    skip(arg0: number): number;
}