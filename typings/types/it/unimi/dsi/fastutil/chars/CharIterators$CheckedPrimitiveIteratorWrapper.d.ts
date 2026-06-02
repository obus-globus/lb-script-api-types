import type { CharConsumer } from '../../../../../it/unimi/dsi/fastutil/chars/CharConsumer.d.ts'
import type { CharIterators$PrimitiveIteratorWrapper } from '../../../../../it/unimi/dsi/fastutil/chars/CharIterators$PrimitiveIteratorWrapper.d.ts'
import type { PrimitiveIterator$OfInt } from '../../../../../java/util/PrimitiveIterator$OfInt.d.ts'
export class CharIterators$CheckedPrimitiveIteratorWrapper extends CharIterators$PrimitiveIteratorWrapper {
    constructor(arg0: PrimitiveIterator$OfInt)
    forEachRemaining(arg0: (param0: string) => void): void;
    nextChar(): string;
}