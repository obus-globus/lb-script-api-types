import type { FloatConsumer } from '../../../../../it/unimi/dsi/fastutil/floats/FloatConsumer.d.ts'
import type { FloatIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatIterator.d.ts'
import type { Reference2FloatOpenHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2FloatOpenHashMap$MapIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { DoubleConsumer } from '../../../../../java/util/function/DoubleConsumer.d.ts'
export class Reference2FloatOpenHashMap$ValueIterator extends Reference2FloatOpenHashMap$MapIterator<Object> implements FloatIterator {
    constructor(null_: Reference2FloatOpenHashMap$ValueIterator)
    acceptOnIndex(arg0: (param0: number) => void, arg1: number): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    next(): number;
    nextFloat(): number;
    skip(arg0: number): number;
}