import type { BinaryOperator } from '../../../../../java/util/function/BinaryOperator.d.ts'
import type { DoubleBinaryOperator as DoubleBinaryOperator_2 } from '../../../../../java/util/function/DoubleBinaryOperator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DoubleBinaryOperator extends BinaryOperator<number>, DoubleBinaryOperator_2, Object{
    apply(arg0: number, arg1: number): number;
    apply(arg0: number, arg1: number): number;
    applyAsDouble(arg0: number, arg1: number): number;
}