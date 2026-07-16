import type { BiFunction } from '../../../../../java/util/function/BiFunction.d.ts'
import type { BinaryOperator } from '../../../../../java/util/function/BinaryOperator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IOBiFunction } from '../../../../../org/apache/commons/io/function/IOBiFunction.d.ts'
import type { IOFunction } from '../../../../../org/apache/commons/io/function/IOFunction.d.ts'
export interface IOBinaryOperator<T extends unknown> extends Object, IOBiFunction<T, T, T> {
    andThen<V extends unknown>(arg0: (param0: T) => V): (param0: T, param1: T) => V;
    asBiFunction(): (param0: T, param1: T) => T;
    asBinaryOperator(): (param0: T, param1: T) => T;
}