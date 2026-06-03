import type { Int2DoubleOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2DoubleOpenCustomHashMap$MapIterator.d.ts'
import type { IntConsumer } from '../../../../../it/unimi/dsi/fastutil/ints/IntConsumer.d.ts'
import type { IntIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer as IntConsumer_2 } from '../../../../../java/util/function/IntConsumer.d.ts'
export class Int2DoubleOpenCustomHashMap$KeyIterator extends Int2DoubleOpenCustomHashMap$MapIterator<(param0: number) => void> implements IntIterator {
    constructor(null_: Int2DoubleOpenCustomHashMap$KeyIterator)
    acceptOnIndex(arg0: (param0: number) => void, arg1: number): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    next(): number;
    nextInt(): number;
    skip(arg0: number): number;
}