import type { ByteConsumer } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteConsumer.d.ts'
import type { ByteIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteIterator.d.ts'
import type { ByteSpliterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteSpliterators$IteratorFromSpliterator extends Object implements ByteConsumer, ByteIterator {
    constructor(arg0: ByteSpliterator)
    // private hasPeeked: boolean;
    // private holder: number;
    // private spliterator: ByteSpliterator;
    accept(arg0: number): void;
    andThen(arg0: (param0: number) => void): (param0: number) => void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    next(): number;
    nextByte(): number;
    skip(arg0: number): number;
}