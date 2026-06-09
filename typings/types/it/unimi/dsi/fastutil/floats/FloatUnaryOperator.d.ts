import type { DoubleUnaryOperator } from '../../../../../java/util/function/DoubleUnaryOperator.d.ts'
import type { UnaryOperator } from '../../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FloatUnaryOperator extends DoubleUnaryOperator, UnaryOperator<number>, Object {
    andThen(arg0: (param0: number) => kotlin.Double): (param0: number) => kotlin.Double;
    apply(arg0: number): number;
    applyAsDouble(arg0: number): number;
    compose(arg0: (param0: number) => kotlin.Double): (param0: number) => kotlin.Double;
}