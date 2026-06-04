import type { FloatBigListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatBigListIterator.d.ts'
import type { FloatConsumer } from '../../../../../it/unimi/dsi/fastutil/floats/FloatConsumer.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { DoubleConsumer } from '../../../../../java/util/function/DoubleConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FloatBigListIterators$UnmodifiableBigListIterator extends Object implements FloatBigListIterator {
    constructor(arg0: FloatBigListIterator)
    // private i: FloatBigListIterator;
    add(arg0: number): void;
    back(arg0: number): number;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextFloat(): number;
    nextIndex(): number;
    previousFloat(): number;
    previousIndex(): number;
    set(arg0: number): void;
    skip(arg0: number): number;
}