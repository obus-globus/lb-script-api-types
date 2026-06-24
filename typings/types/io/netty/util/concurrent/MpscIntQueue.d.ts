import type { IntBinaryOperator } from '../../../../java/util/function/IntBinaryOperator.d.ts'
import type { IntConsumer } from '../../../../java/util/function/IntConsumer.d.ts'
import type { IntSupplier } from '../../../../java/util/function/IntSupplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface MpscIntQueue extends Object {
    drain(arg0: number, arg1: (param0: number) => void): number;
    fill(arg0: number, arg1: () => number): number;
    isEmpty(): boolean;
    offer(arg0: number): boolean;
    poll(): number;
    size(): number;
    weakPeekReduce(arg0: number, arg1: number, arg2: (param0: number, param1: number) => number): number;
}