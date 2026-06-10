import type { Object } from '../../../java/lang/Object.d.ts'
export interface IntUnaryOperator extends Object {
    andThen(arg0: (param0: number) => number): (param0: number) => number;
    applyAsInt(arg0: number): number;
    compose(arg0: (param0: number) => number): (param0: number) => number;
}