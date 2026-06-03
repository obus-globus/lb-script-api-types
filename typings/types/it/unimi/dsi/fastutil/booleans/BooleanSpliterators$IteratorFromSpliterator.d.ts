import type { BooleanConsumer } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { BooleanIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanIterator.d.ts'
import type { BooleanSpliterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanSpliterators$IteratorFromSpliterator extends Object implements BooleanConsumer, BooleanIterator {
    constructor(arg0: BooleanSpliterator)
    // private hasPeeked: boolean;
    // private holder: boolean;
    // private spliterator: BooleanSpliterator;
    accept(arg0: boolean): void;
    accept(arg0: boolean): void;
    accept(arg0: boolean): void;
    andThen(arg0: (param0: boolean) => void): (param0: boolean) => void;
    andThen(arg0: (param0: boolean) => void): (param0: boolean) => void;
    forEachRemaining(arg0: (param0: boolean) => void): void;
    forEachRemaining(arg0: (param0: boolean) => void): void;
    forEachRemaining(arg0: (param0: boolean) => void): void;
    forEachRemaining(arg0: (param0: boolean) => void): void;
    hasNext(): boolean;
    next(): boolean;
    nextBoolean(): boolean;
    skip(arg0: number): number;
    skip(arg0: number): number;
}