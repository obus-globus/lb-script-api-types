import type { LongConsumer } from '../../../../../it/unimi/dsi/fastutil/longs/LongConsumer.d.ts'
import type { LongIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LongOpenHashBigSet$SetIterator extends Object implements LongIterator {
    private constructor(null_: LongOpenHashBigSet$SetIterator)
    // private base: number;
    // private c: number;
    // private displ: number;
    // private last: number;
    // private mustReturnNull: boolean;
    // private wrapped: (Object | null)[];
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    next(): number;
    nextLong(): number;
    remove(): void;
    // private shiftKeys(arg0: number): void;
    skip(arg0: number): number;
}