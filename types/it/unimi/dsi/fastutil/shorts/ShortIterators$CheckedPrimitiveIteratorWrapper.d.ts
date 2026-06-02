import type { ShortConsumer } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortConsumer.d.ts'
import type { ShortIterators$PrimitiveIteratorWrapper } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortIterators$PrimitiveIteratorWrapper.d.ts'
import type { PrimitiveIterator$OfInt } from '../../../../../java/util/PrimitiveIterator$OfInt.d.ts'
export class ShortIterators$CheckedPrimitiveIteratorWrapper extends ShortIterators$PrimitiveIteratorWrapper {
    constructor(arg0: PrimitiveIterator$OfInt)
    forEachRemaining(arg0: (param0: number) => void): void;
    nextShort(): number;
}