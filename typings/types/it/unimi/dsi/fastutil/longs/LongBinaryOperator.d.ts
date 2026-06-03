import type { BinaryOperator } from '../../../../../java/util/function/BinaryOperator.d.ts'
import type { LongBinaryOperator as LongBinaryOperator_2 } from '../../../../../java/util/function/LongBinaryOperator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface LongBinaryOperator extends BinaryOperator<number>, LongBinaryOperator_2, Object{
    apply(arg0: number, arg1: number): number;
    apply(arg0: number, arg1: number): number;
    applyAsLong(arg0: number, arg1: number): number;
}