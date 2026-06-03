import type { LongBigListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongBigListIterator.d.ts'
import type { LongConsumer } from '../../../../../it/unimi/dsi/fastutil/longs/LongConsumer.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { LongConsumer as LongConsumer_2 } from '../../../../../java/util/function/LongConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LongBigListIterators$UnmodifiableBigListIterator extends Object implements LongBigListIterator {
    constructor(arg0: LongBigListIterator)
    // private i: LongBigListIterator;
    add(arg0: number): void;
    add(arg0: number): void;
    back(arg0: number): number;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextIndex(): number;
    nextLong(): number;
    previousIndex(): number;
    previousLong(): number;
    set(arg0: number): void;
    set(arg0: number): void;
    skip(arg0: number): number;
    skip(arg0: number): number;
}