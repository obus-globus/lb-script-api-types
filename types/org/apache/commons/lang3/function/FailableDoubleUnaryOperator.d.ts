import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface FailableDoubleUnaryOperator<E extends Throwable> extends Object{
    andThen(arg0: FailableDoubleUnaryOperator<E>): FailableDoubleUnaryOperator<E>;
    applyAsDouble(arg0: number): number;
    compose(arg0: FailableDoubleUnaryOperator<E>): FailableDoubleUnaryOperator<E>;
}