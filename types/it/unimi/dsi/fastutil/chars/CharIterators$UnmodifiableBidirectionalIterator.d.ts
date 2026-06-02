import type { CharBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharBidirectionalIterator.d.ts'
import type { CharConsumer } from '../../../../../it/unimi/dsi/fastutil/chars/CharConsumer.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharIterators$UnmodifiableBidirectionalIterator extends Object implements CharBidirectionalIterator {
    constructor(arg0: CharBidirectionalIterator)
    // private i: CharBidirectionalIterator;
    back(arg0: number): number;
    forEachRemaining(arg0: (param0: string) => void): void;
    forEachRemaining(arg0: (param0: string) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextChar(): string;
    previous(): string;
    previousChar(): string;
    skip(arg0: number): number;
}