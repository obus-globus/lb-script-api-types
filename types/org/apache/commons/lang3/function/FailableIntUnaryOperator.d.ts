import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface FailableIntUnaryOperator<E extends Throwable> extends Object{
    andThen(arg0: FailableIntUnaryOperator<E>): FailableIntUnaryOperator<E>;
    applyAsInt(arg0: number): number;
    compose(arg0: FailableIntUnaryOperator<E>): FailableIntUnaryOperator<E>;
}