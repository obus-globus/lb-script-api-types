import type { DoubleConsumer } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleConsumer.d.ts'
import type { DoubleIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleIterator.d.ts'
import type { DoubleSpliterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { DoubleConsumer as DoubleConsumer_2 } from '../../../../../java/util/function/DoubleConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoubleSpliterators$IteratorFromSpliterator extends Object implements DoubleConsumer, DoubleIterator {
    constructor(arg0: DoubleSpliterator)
    // private hasPeeked: boolean;
    // private holder: number;
    // private spliterator: DoubleSpliterator;
    accept(arg0: number): void;
    andThen(arg0: (param0: number) => void): (param0: number) => void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    next(): number;
    nextDouble(): number;
    skip(arg0: number): number;
}