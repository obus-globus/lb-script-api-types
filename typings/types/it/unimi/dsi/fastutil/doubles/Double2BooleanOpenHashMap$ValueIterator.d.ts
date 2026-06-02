import type { BooleanConsumer } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { BooleanIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanIterator.d.ts'
import type { Double2BooleanOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2BooleanOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Double2BooleanOpenHashMap$ValueIterator extends Double2BooleanOpenHashMap$MapIterator<(param0: boolean) => void> implements BooleanIterator {
    constructor(null_: Double2BooleanOpenHashMap$ValueIterator)
    acceptOnIndex(arg0: (param0: boolean) => void, arg1: number): void;
    forEachRemaining(arg0: (param0: boolean) => void): void;
    forEachRemaining(arg0: (param0: boolean) => void): void;
    next(): boolean;
    nextBoolean(): boolean;
    skip(arg0: number): number;
}