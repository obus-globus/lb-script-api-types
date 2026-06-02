import type { ByteConsumer } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteConsumer.d.ts'
import type { PrimitiveIterator } from '../../../../../java/util/PrimitiveIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ByteIterator extends PrimitiveIterator<number, (param0: number) => void>, Object{
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    next(): number;
    nextByte(): number;
    skip(arg0: number): number;
}