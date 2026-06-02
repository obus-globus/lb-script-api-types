import type { DoubleListIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { DoubleConsumer } from '../../../../../java/util/function/DoubleConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoubleIterators$UnmodifiableListIterator extends Object implements DoubleListIterator {
    constructor(arg0: DoubleListIterator)
    // private i: DoubleListIterator;
    add(arg0: number): void;
    add(arg0: number): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): number;
    nextDouble(): number;
    nextIndex(): number;
    previous(): number;
    previousDouble(): number;
    previousIndex(): number;
    remove(): void;
    set(arg0: number): void;
    set(arg0: number): void;
}