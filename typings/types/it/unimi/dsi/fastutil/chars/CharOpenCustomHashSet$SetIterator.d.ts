import type { CharOpenCustomHashSet$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { CharConsumer } from '../../../../../it/unimi/dsi/fastutil/chars/CharConsumer.d.ts'
import type { CharIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharOpenCustomHashSet$SetIterator extends Object implements CharIterator {
    private constructor(null_: (Object | null)[])
    constructor(null_: (Object | null)[], arg1: CharOpenCustomHashSet$1)
    // private c: number;
    // private last: number;
    // private mustReturnNull: boolean;
    // private pos: number;
    // private wrapped: (Object | null)[];
    forEachRemaining(arg0: (param0: string) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    next(): string;
    nextChar(): string;
    remove(): void;
    // private shiftKeys(arg0: number): void;
    skip(arg0: number): number;
}