import type { BooleanConsumer } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { BooleanIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanIterator.d.ts'
import type { Short2BooleanOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2BooleanOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Short2BooleanOpenHashMap$ValueIterator extends Short2BooleanOpenHashMap$MapIterator<(param0: boolean) => void> implements BooleanIterator {
    constructor(null_: Short2BooleanOpenHashMap$ValueIterator)
    acceptOnIndex(arg0: (param0: boolean) => void, arg1: number): void;
    forEachRemaining(arg0: (param0: boolean) => void): void;
    next(): boolean;
    nextBoolean(): boolean;
    skip(arg0: number): number;
}