import type { Float2IntOpenCustomHashMap$MapIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntOpenCustomHashMap$MapIterator.d.ts'
import type { FloatConsumer } from '../../../../../it/unimi/dsi/fastutil/floats/FloatConsumer.d.ts'
import type { FloatIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { DoubleConsumer } from '../../../../../java/util/function/DoubleConsumer.d.ts'
export class Float2IntOpenCustomHashMap$KeyIterator extends Float2IntOpenCustomHashMap$MapIterator<(param0: number) => void> implements FloatIterator {
    constructor(null_: Float2IntOpenCustomHashMap$KeyIterator)
    acceptOnIndex(arg0: (param0: number) => void, arg1: number): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    next(): number;
    nextFloat(): number;
    skip(arg0: number): number;
}