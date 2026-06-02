import type { IntUnaryOperator } from '../../../../../java/util/function/IntUnaryOperator.d.ts'
import type { UnaryOperator } from '../../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CharUnaryOperator extends IntUnaryOperator, UnaryOperator<string>, Object{
    andThen(arg0: (param0: number) => kotlin.Int): (param0: number) => kotlin.Int;
    apply(arg0: string): string;
    apply(arg0: string): string;
    applyAsInt(arg0: number): number;
    compose(arg0: (param0: number) => kotlin.Int): (param0: number) => kotlin.Int;
}