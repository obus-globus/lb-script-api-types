import type { Double2LongOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2LongOpenHashMap$MapIterator.d.ts'
import type { DoubleConsumer } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleConsumer.d.ts'
import type { DoubleIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { DoubleConsumer as DoubleConsumer_2 } from '../../../../../java/util/function/DoubleConsumer.d.ts'
export class Double2LongOpenHashMap$KeyIterator extends Double2LongOpenHashMap$MapIterator<(param0: number) => void> implements DoubleIterator {
    constructor(null_: Double2LongOpenHashMap$KeyIterator)
    acceptOnIndex(arg0: (param0: number) => void, arg1: number): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    next(): number;
    nextDouble(): number;
    skip(arg0: number): number;
}