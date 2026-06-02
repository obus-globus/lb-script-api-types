import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface FailableDoubleBinaryOperator<E extends Throwable> extends Object{
    applyAsDouble(arg0: number, arg1: number): number;
}