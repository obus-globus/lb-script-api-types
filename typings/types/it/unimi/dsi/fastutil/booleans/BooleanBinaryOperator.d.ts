import type { BinaryOperator } from '../../../../../java/util/function/BinaryOperator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BooleanBinaryOperator extends BinaryOperator<boolean>, Object{
    apply(arg0: boolean, arg1: boolean): boolean;
}