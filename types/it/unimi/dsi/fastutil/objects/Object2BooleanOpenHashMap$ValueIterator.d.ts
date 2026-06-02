import type { BooleanConsumer } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { BooleanIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanIterator.d.ts'
import type { Object2BooleanOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
export class Object2BooleanOpenHashMap$ValueIterator extends Object2BooleanOpenHashMap$MapIterator<Object> implements BooleanIterator {
    constructor(null_: Object2BooleanOpenHashMap$ValueIterator)
    acceptOnIndex(arg0: (param0: boolean) => void, arg1: number): void;
    forEachRemaining(arg0: (param0: boolean) => void): void;
    forEachRemaining(arg0: (param0: boolean) => void): void;
    next(): boolean;
    nextBoolean(): boolean;
    skip(arg0: number): number;
}