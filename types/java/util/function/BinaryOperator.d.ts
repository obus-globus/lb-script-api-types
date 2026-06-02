import type { BiFunction } from '../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface BinaryOperator<T extends Object | number | string | boolean> extends BiFunction<T, T, T>, Object{
    andThen(arg0: (param0: R) => V): (param0: T, param1: U) => V;
}