import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface FailableLongUnaryOperator<E extends Throwable> extends Object{
    andThen(arg0: FailableLongUnaryOperator<E>): FailableLongUnaryOperator<E>;
    applyAsLong(arg0: number): number;
    compose(arg0: FailableLongUnaryOperator<E>): FailableLongUnaryOperator<E>;
}