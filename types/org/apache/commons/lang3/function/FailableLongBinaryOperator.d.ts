import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface FailableLongBinaryOperator<E extends Throwable> extends Object{
    applyAsLong(arg0: number, arg1: number): number;
}