import type { Long2ByteOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ByteOpenHashMap$MapIterator.d.ts'
import type { LongConsumer } from '../../../../../it/unimi/dsi/fastutil/longs/LongConsumer.d.ts'
import type { LongIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { LongConsumer as LongConsumer_2 } from '../../../../../java/util/function/LongConsumer.d.ts'
export class Long2ByteOpenHashMap$KeyIterator extends Long2ByteOpenHashMap$MapIterator<(param0: number) => void> implements LongIterator {
    constructor(null_: Long2ByteOpenHashMap$KeyIterator)
    acceptOnIndex(arg0: (param0: number) => void, arg1: number): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    next(): number;
    nextLong(): number;
    skip(arg0: number): number;
}