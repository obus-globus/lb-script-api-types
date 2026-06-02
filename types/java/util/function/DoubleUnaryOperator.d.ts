import type { Object } from '../../../java/lang/Object.d.ts'
export interface DoubleUnaryOperator extends Object{
    andThen(arg0: (param0: number) => kotlin.Double): (param0: number) => kotlin.Double;
    applyAsDouble(arg0: number): number;
    compose(arg0: (param0: number) => kotlin.Double): (param0: number) => kotlin.Double;
}