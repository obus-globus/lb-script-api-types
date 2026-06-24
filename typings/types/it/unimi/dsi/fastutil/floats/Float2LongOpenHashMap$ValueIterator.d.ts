import type { Float2LongOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2LongOpenHashMap$MapIterator.d.ts'
import type { LongConsumer } from '../../../../../it/unimi/dsi/fastutil/longs/LongConsumer.d.ts'
import type { LongIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { LongConsumer as LongConsumer_2 } from '../../../../../java/util/function/LongConsumer.d.ts'
export class Float2LongOpenHashMap$ValueIterator extends Float2LongOpenHashMap$MapIterator<(param0: number) => void> implements LongIterator {
    constructor(null_: { [key: string]: any })
    acceptOnIndex(arg0: (param0: number) => void, arg1: number): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    next(): number;
    nextLong(): number;
    skip(arg0: number): number;
}