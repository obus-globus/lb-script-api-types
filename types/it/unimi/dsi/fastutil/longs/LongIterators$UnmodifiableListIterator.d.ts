import type { LongListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongListIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { LongConsumer } from '../../../../../java/util/function/LongConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LongIterators$UnmodifiableListIterator extends Object implements LongListIterator {
    constructor(arg0: LongListIterator)
    // private i: LongListIterator;
    add(arg0: number): void;
    add(arg0: number): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): number;
    nextIndex(): number;
    nextLong(): number;
    previous(): number;
    previousIndex(): number;
    previousLong(): number;
    remove(): void;
    set(arg0: number): void;
    set(arg0: number): void;
}