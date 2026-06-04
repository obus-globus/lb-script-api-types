import type { BinaryOperator } from '../../../../../java/util/function/BinaryOperator.d.ts'
import type { IntBinaryOperator } from '../../../../../java/util/function/IntBinaryOperator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CharBinaryOperator extends BinaryOperator<string>, IntBinaryOperator, Object{
    apply(arg0: string, arg1: string): string;
    applyAsInt(arg0: number, arg1: number): number;
}