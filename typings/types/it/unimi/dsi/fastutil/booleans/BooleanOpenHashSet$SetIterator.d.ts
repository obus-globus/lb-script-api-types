import type { BooleanConsumer } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { BooleanIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanOpenHashSet$SetIterator extends Object implements BooleanIterator {
    private constructor(null_: BooleanOpenHashSet$SetIterator)
    // private c: number;
    // private last: number;
    // private mustReturnNull: boolean;
    // private pos: number;
    // private wrapped: (Object | null)[];
    forEachRemaining(arg0: (param0: boolean) => void): void;
    forEachRemaining(arg0: (param0: boolean) => void): void;
    forEachRemaining(arg0: (param0: boolean) => void): void;
    hasNext(): boolean;
    next(): boolean;
    nextBoolean(): boolean;
    remove(): void;
    // private shiftKeys(arg0: number): void;
    skip(arg0: number): number;
}