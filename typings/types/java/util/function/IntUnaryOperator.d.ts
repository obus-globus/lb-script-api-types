import type { Object } from '../../../java/lang/Object.d.ts'
export interface IntUnaryOperator extends Object {
    andThen(arg0: (param0: number) => kotlin.Int): (param0: number) => kotlin.Int;
    applyAsInt(arg0: number): number;
    compose(arg0: (param0: number) => kotlin.Int): (param0: number) => kotlin.Int;
}