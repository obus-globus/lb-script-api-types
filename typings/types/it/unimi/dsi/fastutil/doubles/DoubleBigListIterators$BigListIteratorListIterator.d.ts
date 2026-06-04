import type { DoubleBigListIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleBigListIterator.d.ts'
import type { DoubleConsumer } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleConsumer.d.ts'
import type { DoubleListIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { DoubleConsumer as DoubleConsumer_2 } from '../../../../../java/util/function/DoubleConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoubleBigListIterators$BigListIteratorListIterator extends Object implements DoubleBigListIterator {
    constructor(arg0: DoubleListIterator)
    // private i: DoubleListIterator;
    add(arg0: number): void;
    back(arg0: number): number;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    // private intDisplacement(arg0: number): number;
    nextDouble(): number;
    nextIndex(): number;
    previousDouble(): number;
    previousIndex(): number;
    remove(): void;
    set(arg0: number): void;
    skip(arg0: number): number;
}