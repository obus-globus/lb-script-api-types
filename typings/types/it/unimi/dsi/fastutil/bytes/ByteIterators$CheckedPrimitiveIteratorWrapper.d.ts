import type { ByteConsumer } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteConsumer.d.ts'
import type { ByteIterators$PrimitiveIteratorWrapper } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteIterators$PrimitiveIteratorWrapper.d.ts'
import type { PrimitiveIterator$OfInt } from '../../../../../java/util/PrimitiveIterator$OfInt.d.ts'
export class ByteIterators$CheckedPrimitiveIteratorWrapper extends ByteIterators$PrimitiveIteratorWrapper {
    constructor(arg0: PrimitiveIterator$OfInt)
    forEachRemaining(arg0: (param0: number) => void): void;
    nextByte(): number;
}