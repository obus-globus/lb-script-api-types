import type { BinaryOperator } from '../../../../../../java/util/function/BinaryOperator.d.ts'
import type { IntBinaryOperator } from '../../../../../../java/util/function/IntBinaryOperator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface IntBinaryOperator extends BinaryOperator<number>, IntBinaryOperator, Object{
    apply(arg0: number, arg1: number): number;
    apply(arg0: number, arg1: number): number;
    applyAsInt(arg0: number, arg1: number): number;
}