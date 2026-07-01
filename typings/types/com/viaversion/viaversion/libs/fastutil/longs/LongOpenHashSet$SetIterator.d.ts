import type { LongConsumer } from '../../../../../../com/viaversion/viaversion/libs/fastutil/longs/LongConsumer.d.ts'
import type { LongIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/longs/LongIterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { LongConsumer as LongConsumer_2 } from '../../../../../../java/util/function/LongConsumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LongOpenHashSet$SetIterator extends Object implements LongIterator {
    constructor(null_: (Object | null)[], arg1: any)
    // private c: number;
    // private last: number;
    // private mustReturnNull: boolean;
    // private pos: number;
    // private wrapped: (Object | null)[];
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    next(): number;
    nextLong(): number;
    remove(): void;
    // private shiftKeys(arg0: number): void;
    skip(arg0: number): number;
}