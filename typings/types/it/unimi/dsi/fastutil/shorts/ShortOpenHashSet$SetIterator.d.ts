import type { ShortOpenHashSet$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { ShortConsumer } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortConsumer.d.ts'
import type { ShortIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShortOpenHashSet$SetIterator extends Object implements ShortIterator {
    private constructor(null_: (Object | null)[])
    constructor(null_: (Object | null)[], arg1: ShortOpenHashSet$1)
    // private c: number;
    // private last: number;
    // private mustReturnNull: boolean;
    // private pos: number;
    // private wrapped: (Object | null)[];
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    next(): number;
    nextShort(): number;
    remove(): void;
    // private shiftKeys(arg0: number): void;
    skip(arg0: number): number;
}