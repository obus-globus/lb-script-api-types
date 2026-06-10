import type { Object } from '../../../java/lang/Object.d.ts'
export interface DoubleUnaryOperator extends Object {
    andThen(arg0: (param0: number) => number): (param0: number) => number;
    applyAsDouble(arg0: number): number;
    compose(arg0: (param0: number) => number): (param0: number) => number;
}