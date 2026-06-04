import type { LongUnaryOperator as LongUnaryOperator_2 } from '../../../../../../java/util/function/LongUnaryOperator.d.ts'
import type { UnaryOperator } from '../../../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface LongUnaryOperator extends LongUnaryOperator_2, UnaryOperator<number>, Object{
    andThen(arg0: (param0: number) => kotlin.Long): (param0: number) => kotlin.Long;
    apply(arg0: number): number;
    applyAsLong(arg0: number): number;
    compose(arg0: (param0: number) => kotlin.Long): (param0: number) => kotlin.Long;
}