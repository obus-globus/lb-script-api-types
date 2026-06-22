import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { ShortConsumer } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortConsumer.d.ts'
import type { ShortIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ShortBidirectionalIterator extends ObjectBidirectionalIterator<number>, ShortIterator, Object {
    back(arg0: number): number;
    forEachRemaining(arg0: (param0: number) => void): void;
    next(): number;
    nextShort(): number;
    previous(): number;
    previousShort(): number;
    skip(arg0: number): number;
}