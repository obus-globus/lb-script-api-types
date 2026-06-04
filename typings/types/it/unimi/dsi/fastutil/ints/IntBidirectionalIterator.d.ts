import type { IntConsumer } from '../../../../../it/unimi/dsi/fastutil/ints/IntConsumer.d.ts'
import type { IntIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntIterator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface IntBidirectionalIterator extends IntIterator, ObjectBidirectionalIterator<number>, Object{
    back(arg0: number): number;
    forEachRemaining(arg0: (param0: number) => void): void;
    next(): number;
    previous(): number;
    previousInt(): number;
    skip(arg0: number): number;
}