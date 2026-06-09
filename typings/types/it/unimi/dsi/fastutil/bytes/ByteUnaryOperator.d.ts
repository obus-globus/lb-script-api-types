import type { IntUnaryOperator } from '../../../../../java/util/function/IntUnaryOperator.d.ts'
import type { UnaryOperator } from '../../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ByteUnaryOperator extends IntUnaryOperator, UnaryOperator<number>, Object {
    andThen(arg0: (param0: number) => kotlin.Int): (param0: number) => kotlin.Int;
    apply(arg0: number): number;
    applyAsInt(arg0: number): number;
    compose(arg0: (param0: number) => kotlin.Int): (param0: number) => kotlin.Int;
}