import type { DoubleUnaryOperator as DoubleUnaryOperator_2 } from '../../../../../java/util/function/DoubleUnaryOperator.d.ts'
import type { UnaryOperator } from '../../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DoubleUnaryOperator extends DoubleUnaryOperator_2, UnaryOperator<number>, Object {
    andThen(arg0: (param0: number) => number): (param0: number) => number;
    apply(arg0: number): number;
    applyAsDouble(arg0: number): number;
    compose(arg0: (param0: number) => number): (param0: number) => number;
}