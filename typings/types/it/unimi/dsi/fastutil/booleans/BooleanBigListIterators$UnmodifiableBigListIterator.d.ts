import type { BooleanBigListIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanBigListIterator.d.ts'
import type { BooleanConsumer } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanBigListIterators$UnmodifiableBigListIterator extends Object implements BooleanBigListIterator {
    constructor(arg0: BooleanBigListIterator)
    // private i: BooleanBigListIterator;
    add(arg0: boolean): void;
    back(arg0: number): number;
    forEachRemaining(arg0: (param0: boolean) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextBoolean(): boolean;
    nextIndex(): number;
    previousBoolean(): boolean;
    previousIndex(): number;
    set(arg0: boolean): void;
    skip(arg0: number): number;
}