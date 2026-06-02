import type { FloatConsumer } from '../../../../../it/unimi/dsi/fastutil/floats/FloatConsumer.d.ts'
import type { FloatIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatIterator.d.ts'
import type { FloatSpliterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { DoubleConsumer } from '../../../../../java/util/function/DoubleConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FloatSpliterators$IteratorFromSpliterator extends Object implements FloatConsumer, FloatIterator {
    constructor(arg0: FloatSpliterator)
    // private hasPeeked: boolean;
    // private holder: number;
    // private spliterator: FloatSpliterator;
    accept(arg0: number): void;
    accept(arg0: number): void;
    accept(arg0: number): void;
    andThen(arg0: (param0: number) => void): (param0: number) => void;
    andThen(arg0: (param0: number) => void): (param0: number) => void;
    andThen(arg0: (param0: number) => void): (param0: number) => void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    next(): number;
    nextFloat(): number;
    skip(arg0: number): number;
    skip(arg0: number): number;
}