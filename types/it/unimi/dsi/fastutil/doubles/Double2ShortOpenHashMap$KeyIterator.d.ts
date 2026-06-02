import type { Double2ShortOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ShortOpenHashMap$MapIterator.d.ts'
import type { DoubleConsumer } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleConsumer.d.ts'
import type { DoubleIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { DoubleConsumer } from '../../../../../java/util/function/DoubleConsumer.d.ts'
export class Double2ShortOpenHashMap$KeyIterator extends Double2ShortOpenHashMap$MapIterator<(param0: number) => void> implements DoubleIterator {
    constructor(null_: Double2ShortOpenHashMap$KeyIterator)
    acceptOnIndex(arg0: (param0: number) => void, arg1: number): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    next(): number;
    nextDouble(): number;
    skip(arg0: number): number;
}